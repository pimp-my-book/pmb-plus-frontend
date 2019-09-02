import App from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import Amplify, { Auth } from 'aws-amplify'
import withApollo from '../lib/withApollo'
import Page from '../components/Page'
import config from '../config'

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
})

class MyApp extends App {
    static displayName = 'PMB Plus'

    render() {
        const { Component, pageProps, apolloClient } = this.props
        return (
            <ApolloProvider client={apolloClient}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ApolloProvider>
        )
    }
}

export default withApollo(MyApp)