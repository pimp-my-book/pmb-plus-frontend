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
        userPoolId: 'us-east-1_OQfgqHOIe',
        identityPoolId: 'us-east-1:a1479600-c174-4c52-84b4-460ecbfb4a07',
        userPoolWebClientId: '5uo9kjgbmrtugll1o0hv64c5t5'
    }
}


Amplify.configure(
    amplifyConfig
)

class Page extends Component {


    //initilize the getInitialProps func and props data
    static async getInitalProps({ Component, router, ctx }) {
        let props = {}
        if (Component.getInitalProps) {
            props = await Component.getInitalProps(ctx)
        }



        return { props }
    }



    handleLogout = async event => {
        await Auth.signOut()
        Router.push('/')
    }


    render() {



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

                />
                <div

                >

                    {this.props.children}
                </div>
                <Footer
                    className="relative"
                />
            </>
        )
    }
}

export default Page