import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import Cookie from 'js-cookie'
import { Auth } from "aws-amplify";
import getConfig from 'next/config'
import config from '../config'

// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
let apolloClient = null

const stage = process.env.REACT_APP_STAGE === "prod";
//function getToken() { return Auth.currentSession() }
// Polyfill fetch() on the server (used by apollo-client)
if (typeof window === 'undefined') {
    global.fetch = fetch
}

function create(initialState, getToken) {
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    const isBrowser = typeof window !== 'undefined'

    console.log(`${process.env.ENV_STAGE} - it me`)
    //process.env.NODE_ENV === 'development' ? process.env.serviceEndpoint_PROD :
    //'http://localhost:4000/graphql'
    const isDev = process.env.ENV_STAGE === 'development'
    const httpLink = createHttpLink({
        uri: isDev ? process.env.serviceEndpoint_DEV : process.env.serviceEndpoint_PROD, // Server URL (must be absolute)
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        // Use fetch() polyfill on the server
        fetch: !isBrowser && fetch
    })

    const authLink = setContext(async (_, { headers }) => {
        const token = Cookie.get('token')

        // const anonymousUser = await Auth.currentCredentials()
        //console.log(Object.values(anonymousUser.params.Logins)[0])
        //`Bearer ${anonymousUser.data.Credentials.sessionToken}`

        let guestToken
        // guestToken = data.signInUserSession.idToken.jwtToken


        console.log(config)

        if (!token) {
            await Auth.signIn(config.cognito.USERNAME, config.cognito.PASSWORD)
                .then(data => guestToken = data.signInUserSession.idToken.jwtToken)
                .catch(err => console.log(err))
        }
        // console.log(guestToken)

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : `Bearer ${guestToken}`
            }
        }
    })

    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState || {})
    })

}

export default function initApollo(initialState) {



    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return create(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}