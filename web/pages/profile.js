import Router from 'next/router'
import Auth from "@aws-amplify/auth";

const profile = (props) => {
    console.log(props.isAuthenticated)
    if (props.isAuthenticated) {
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