import React, { Component } from 'react'
import Router from 'next/router'
import { Footer, NavigationBar } from 'umqombothi-component-library'
//import Amplify from "@aws-amplify/core";
//import Auth from "@aws-amplify/auth";
import Amplify, { Auth, Storage } from 'aws-amplify'
import Cookie from 'js-cookie'




Amplify.configure({
    Auth: {
        mandatorySignIn: false,
        region: process.env.NODE_ENV === 'development' ? process.env.REGION : 'NOWHERE',
        userPoolId: process.env.NODE_ENV === 'development' ? process.env.UserPoolID_Dev : 'r44',
        identityPoolId: process.env.NODE_ENV === 'development' ? process.env.IdentityPoolId_Dev : 'r44',
        userPoolWebClientId: process.env.NODE_ENV === 'development' ? process.env.UserPoolClientID_Dev : 'r44'
    },
    Storage: {
        region: process.env.NODE_ENV === 'development' ? process.env.REGION : 'NOWHERE',
        identityPoolId: process.env.NODE_ENV === 'development' ? process.env.IdentityPoolId_Dev : 'r44',
        bucket: process.env.NODE_ENV === 'development' ? process.env.s3Bucket_dev : 'r44',
    }
})

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
        Cookie.remove('token', { path: '' })
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