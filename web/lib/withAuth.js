import React from 'react'
import redirect from './redirect'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
export default WithAuth => {
    return class AuthComponent extends React.Component {
        static async getIntialProps(ctx) {
            //Get User data from cognito via amplify
            const userData = Auth.currentSession()
                                .then(user => user)
                        .catch(e => console.log(e)
    
    ///Check if the data is present, if not redirect
     if (userData ){
        return {
            data: userData
        }
    } else {
        Router.push('/')
    }
}


// return the props into the withAuth component
          render(){
return <WithAuth {...props} />

}
                
    

}