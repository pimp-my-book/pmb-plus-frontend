import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Wee nee to use Polyfill fetch() on the server
if (typeof window === 'undefined') {
    global.fetch = fetch
}


function create(initalState) {
    const httpLink = createHttpLink({
        uri: 'http://localhost/4000/graphql',
        credentials: 'same-origin',

    })

    const isBrowser = typeof window !== 'undefined'
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, //this will make sure queires only run once
        cache: new InMemoryCache().restore(initalState || {}),
        link: httpLink
    })
}


export default function initApollo(initalState, options) {
    //new client is made for every server-side request
    if (typeof window === 'undefined') {
        /*
        let fetchOptions = {}
        //fetchOptions is required because its  a server-side only module
        if (process.env.https_proxy) {
            fetchOptions = {
                agent: new (require('https-proxy-agent'))(process.env.https_proxy)
            }
        }
        return create(initialState, {
            ...options,
            fetchOptions
        })
        */
        return create(initalState)
    }

    ///use the client on the client-side
    if (!apolloClient) {
        apolloClient = create(initalState, options)
    }

    return apolloClient
}
