import React, { Component } from 'react'
import { Footer, NavigationBar } from 'umqombothi-component-library'
import Auth from "@aws-amplify/auth";


class Page extends Component {

    handleLogout = async event => {
        await Auth.signOut()

    }
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