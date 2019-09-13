import App from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../lib/withApollo'
import Page from '../components/Page'





class MyApp extends App {
    static displayName = 'PMB Plus'



    render() {


        const { Component, pageProps, apolloClient } = this.props
        console.log(this.props)
        return (
            <ApolloProvider client={apolloClient}>
                <Page>
                    <Component {...pageProps} {...this.props} />
                </Page>
            </ApolloProvider>
        )
    }
}

export default withApollo(MyApp)