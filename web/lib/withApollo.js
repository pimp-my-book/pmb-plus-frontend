import React from 'react'
import cookie from 'cookie'
import PropTypes from 'prop-types'
import { getDataFromTree } from '@apollo/react-ssr'
import Head from 'next/head'
import Auth from "@aws-amplify/auth";
import initApollo from './initApollo'


function parseCookies(req, options = {}) {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie, options)
}

export default App => {

    return class Apollo extends React.Component {



        static displayName = 'withApollo(App)'
        static async getInitialProps(ctx) {
            const { Component, router, ctx: { req, res } } = ctx
            const apollo = initApollo({},
                {
                    getToken: () => parseCookies(req).token.idToken.jwtToken
                })


            ctx.ctx.apolloClient = apollo
            let appProps = {}
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }



            // Run all GraphQL queries in the component tree
            // and extract the resulting data

            if (typeof window === 'undefined') {
                try {



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
            let isAuthenticated
            console.log(Auth.currentSession())
            const authDetails = Auth.currentSession()
                .then(data => data.idToken)
            console.log(authDetails)
            if (typeof authDetails.jwtToken) {
                isAuthenticated = true

            } else {
                isAuthenticated = false
            }

            return {
                ...appProps,
                apolloState,
                isAuthenticated
            }
        }

        constructor(props) {
            super(props)
            this.apolloClient = initApollo(props.apolloState)
            this.authState = props.isAuthenticated
        }


        render() {

            return <App {...this.props} authState={this.authState} apolloClient={this.apolloClient} />
        }
    }
}