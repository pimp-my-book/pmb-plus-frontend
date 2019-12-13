import React, { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { HeadingFive } from 'umqombothi-component-library'
//import Amplify from "@aws-amplify/core";
//import Auth from "@aws-amplify/auth";
import Amplify, { Auth, Storage } from 'aws-amplify'
import { Nav } from 'react-bootstrap'
import Cookie from 'js-cookie'
import NavBar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import CatIcon from '../assets/store.svg'
import SellIcon from '../assets/local_grocery_store.svg'
//import config from '../config'
const isDev = process.env.env_stage === 'development'



const NavStyles = styled.div`
margin-left: 800px;

@media (min-width: 375px){
    margin-left: 0px;
}
`

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

        const dev = {

            cognito: {
                USERNAME: process.env.GUEST_USERNAME,
                PASSWORD: process.env.GUEST_PASSWORD,
                USER_POOL_ID: process.env.UserPoolID_Dev,
                APP_CLIENT_ID: process.env.UserPoolClientID_Dev,
                IDENTITY_POOL_ID: process.env.IdentityPoolId_Dev

            }
        };

        const prod = {

            cognito: {
                USERNAME: process.env.PROD_GUEST_USERNAME,
                PASSWORD: process.env.PROD_GUEST_PASSW0RD,
                USER_POOL_ID: process.env.UserPoolID_PROD,
                APP_CLIENT_ID: process.env.UserPoolClientID_PROD,
                IDENTITY_POOL_ID: process.env.IdentityPoolId_PROD,
            }
        };

        const config = process.env.ENV_STAGE === 'development'
            ? dev
            : prod;

        console.log(config)

        Amplify.configure({
            Auth: {
                mandatorySignIn: false,
                region: 'us-east-1',
                userPoolId: config.cognito.USER_POOL_ID,
                identityPoolId: config.cognito.IDENTITY_POOL_ID,
                userPoolWebClientId: config.cognito.APP_CLIENT_ID
            },
            Storage: {
                region: process.env.REGION,
                identityPoolId: config.cognito.IDENTITY_POOL_ID,
                bucket: isDev ? process.env.s3Bucket_dev : process.env.s3Bucket_PROD
            }
        })
        return (
            <>
                <NavBar>
                    <Link href='/search' to='/search'>
                        <div className="mr-32 flex justify-start cursor-pointer">


                            <img src={CatIcon} alt="category_icon" />
                            <HeadingFive className="text-white mt-3" text="Categories" />


                        </div>
                    </Link>
                    <div className="flex lg:flex-row s:flex-col">
                        <Link href='/signin' to='/signin' >
                            <Nav.Item className="cursor-pointer">
                                <HeadingFive className="text-white mt-3" text="Login" />
                            </Nav.Item>
                        </Link>
                        <Link href='/book' to='/book' className="cursor-pointer">
                            <Nav.Item className="flex lg:ml-3 cursor-pointer">
                                <img src={SellIcon} alt="sell_icon" /> <HeadingFive className="text-white mr-5 ml-1 mt-3" text="Sell" />
                            </Nav.Item>
                        </Link>
                    </div>


                </NavBar>
                <div>

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

/*


<span
                        onClick={this.handleLogout}
                    >
                        Logout
                    </span>
*/