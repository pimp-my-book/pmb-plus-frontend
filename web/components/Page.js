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


        return (
            <>
                <NavBar>
                    <Link href='/search' to={'/search'}>
                        <div className="mr-32 flex justify-start cursor-pointer">


                            <img src={CatIcon} alt="category_icon" />
                            <HeadingFive className="text-white mt-3" text="Categories" />


                        </div>
                    </Link>
                    <div className="flex lg:flex-row s:flex-col">
                        <Link href='/signin' to={'/signin'} >
                            <Nav.Item className="cursor-pointer">
                                <HeadingFive className="text-white mt-3" text="Login" />
                            </Nav.Item>
                        </Link>
                        <Link href='/book' to={'/book'} className="cursor-pointer">
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