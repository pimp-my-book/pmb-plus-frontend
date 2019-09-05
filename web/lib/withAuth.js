import React from 'react'
import redirect from './redirect'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
export default WithAuth => {
    return class AuthComponent extends React.Component {
       
ser data from cognito via amplify
                
 componentDidMount(){
            await Auth.currentSes sion()
            then.(data => {

            })
            
    ///Check if the data is present, if not redirect
        


// return the props into the withAuth component
  
             
            
}