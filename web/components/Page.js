import React, { Component } from 'react'
import Router from 'next/router'
import { Footer } from 'umqombothi-component-library'
//import Amplify from "@aws-amplify/core";
//import Auth from "@aws-amplify/auth";
import Amplify, { Auth, Storage } from 'aws-amplify'
import Cookie from 'js-cookie'
import NavBar from '../components/navigation/Navbar'



Amplify.configure({
    Auth: {
        mandatorySignIn: false,
        region: process.env.REGION,
        userPoolId: process.env.UserPoolID_Dev,
        identityPoolId: process.env.IdentityPoolId_Dev,
        userPoolWebClientId: process.env.UserPoolClientID_Dev
    },
    Storage: {
        region: process.env.REGION,
        identityPoolId: process.env.IdentityPoolId_Dev,
        bucket: process.env.s3Bucket_dev
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
                <NavBar


                >
                    <span
                        onClick={this.handleLogout}
                    >
                        Logout
                    </span>
                </NavBar>
                <div

                >

                    {this.props.children}
                </div>
                <Footer
                    className="s:relative md:relative   lapie:relative"
                />
            </>
        )
    }
}

export default Page