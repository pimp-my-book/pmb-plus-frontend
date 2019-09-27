import React from 'react'
import Cookie from 'js-cookie'
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
            const { AppTree, ctx: { req, res } } = ctx
            const apollo = initApollo({},
                {
                    getToken: () => Cookie.get('token')
                })


            ctx.ctx.apolloClient = apollo
            let appProps = {
                isLoggedIn: false
            }
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }


            if (res && res.finished) {
                return {}
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data

            if (typeof window === 'undefined') {
                try {



                    // Run all GraphQL queries
                    await getDataFromTree(


                        <AppTree
                            {...appProps}
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
            this.apolloClient = initApollo(props.apolloState, {
                getToken: () => {
                    return Cookie.get('token')
                }
            })
        }


        render() {

            return <App {...this.props} apolloClient={this.apolloClient} />
        }
    }
}