import React from 'react'
import cookie from 'cookie'
import PropTypes from 'prop-types'
import { getDataFromTree } from '@apollo/react-ssr'
import Head from 'next/head'
import Auth from "@aws-amplify/auth";
import Amplify from "aws-amplify";
import initApollo from './initApollo'
import config from '../config'



export default App => {

    return class Apollo extends React.Component {



        static displayName = 'withApollo(App)'
        static async getInitialProps(ctx) {
            const { Component, router } = ctx

            let appProps = {}
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            const apollo = initApollo()
            if (typeof window === 'undefined') {
                try {

                    Amplify.configure({
                        Auth: {
                            mandatorySignIn: false,
                            region: config.cognito.REGION,
                            userPoolId: config.cognito.USER_POOL_ID,
                            identityPoolId: config.cognito.IDENTITY_POOL_ID,
                            userPoolWebClientId: config.cognito.APP_CLIENT_ID
                        },
                    })

                    // Run all GraphQL queries
                    await getDataFromTree(
                        <App
                            {...appProps}
                            Component={Component}
                            router={router}
                            apolloClient={apollo}
                        />
                    )
                } catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error('Error while running `getDataFromTree`', error)
                }

                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind()
            }

            // Extract query data from the Apollo store
            const apolloState = apollo.cache.extract()

            return {
                ...appProps,
                apolloState
            }
        }

        constructor(props) {
            super(props)
            this.apolloClient = initApollo(props.apolloState)
        }


        render() {

            return <App {...this.props} apolloClient={this.apolloClient} />
        }
    }
}