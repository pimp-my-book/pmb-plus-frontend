import React, { Component } from 'react'
import { Footer, NavigationBar } from 'umqombothi-component-library'


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