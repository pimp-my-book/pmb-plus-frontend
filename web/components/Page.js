import React, { Component } from 'react'
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

console.log(config.cognito.USER_POOL_ID)
console.log(amplifyConfig)
Amplify.configure(
    amplifyConfig
)


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