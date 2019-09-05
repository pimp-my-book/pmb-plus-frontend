import React from 'react'
import redirect from './redirect'
import Auth from "@aws-amplify/auth";

export default withAuth => {
    return class AuthComponent extends React.Component {
        static async getIntialProps(ctx) {
            let authProps = {
                isAuthenticated: false
            }

            if (withAuth.getIntialProps) {

                try {
                    if (await Auth.currentSession()) {
                        appProps.isAuthenticated = true
                    } else {
                        redirect(ctx, '/')
                    }

                }
                catch (e) {
                    return e.message
                }
            }


            return {
                ...authProps
            }


        }

        constructor(props) {
            super(props)

        }

        render() {
            return <withAuth {...this.props} />
        }
    }
}