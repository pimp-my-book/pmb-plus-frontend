import {ApolloClient, InMemoryCache} from 'apollo-bosot'
import {createHttpLink} from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Wee nee to use Polyfill fetch() on the server
if (typeof window === 'undefined'){
    global.fetch = fetch
}


function create (initalState, {fetchOptions}){
    const httpLink = createHttpLink({
        uri: 'http://localhost/4000/graphql',
        credentials: 'same-origin',
        fetchOptions
    })
}


