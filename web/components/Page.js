import React, { Component } from 'react'
import { Footer, NavigationBar } from 'umqombothi-component-library'
import Auth from "@aws-amplify/auth";
import Amplify from "aws-amplify";
import config from '../config'

Amplify.configure({
    Auth: {
        mandatorySignIn: false,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
})
class Page extends Component {

    render() {


        return (
            <>
                <NavigationBar

                />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Page