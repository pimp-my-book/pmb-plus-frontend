import React from 'react'
import redirect from './redirect'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
export default WithAuth => {
    return class AuthComponent extends React.Component {

        //initilize the getInitialProps func and props data
        static async getInitalProps({ Component, router, ctx }) {
            let pageProps = {}
            if (Component.getInitalProps) {
                pageProps = await Component.getInitalProps(ctx)
            }

            return { pageProps }
        }


        // return the props into the withAuth component

        render() {
            return <WithAuth />
        }

    }