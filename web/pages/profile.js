import Router from 'next/router'
import Auth from "@aws-amplify/auth";

const profile = (props) => {
    console.log(props.isAuthenticated)
    console.log(props.authState)
    if (props.isAuthenticated === false) {
        return (
            <div>
                You need to be logged in
            </div>

        )
    } else {
        return (
            <div>
                Your profile
            </div>
        )
    }



}


export default profile