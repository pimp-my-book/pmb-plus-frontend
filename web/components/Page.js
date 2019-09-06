import React, { Component } from 'react'
import Router from 'next/router'
import { Footer, NavigationBar } from 'umqombothi-component-library'
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import config from '../config'

const amplifyConfig = {
    Auth: {
        mandatorySignIn: false,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
}


Amplify.configure(
    amplifyConfig
)

class Page extends Component {


    //initilize the getInitialProps func and props data
    static async getInitalProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitalProps) {
            pageProps = await Component.getInitalProps(ctx)
        }

        return { pageProps }
    }

    constructor(pageProps) {
        super(pageProps)
        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        }
    }



    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated })
    }

    handleLogout = async event => {
        await Auth.signOut()
        this.userHasAuthenticated(false)
        Router.push('/')
    }

    async componentDidMount() {
        try {
            if (await Auth.currentSession()) {
                this.userHasAuthenticated(true)
            }
        }
        catch (e) {
            if (e !== 'No current user') {
                alert(e)
            }
        }

        this.setState({ isAuthenticating: false })
    }
    render() {

        const { pageProps } = this.props

        return (
            <>
                <NavigationBar
                    content={
                        <>
                            <span
                                onClick={this.handleLogout}
                            >
                                Logout
                    </span>
                        </>
                    }
                    {...pageProps}
                />
                {this.props.children}

                <Footer />
            </>
        )
    }
}

export default Page