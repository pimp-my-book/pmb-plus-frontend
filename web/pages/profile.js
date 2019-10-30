import Router from 'next/router'
import Auth from "@aws-amplify/auth";
import Cookie from 'js-cookie'
import ProfilePage from '../components/profile/ProfilePage'
const profile = (props) => {
    //console.log(props)
    const hasCookie = Cookie.get('token')
    if (!hasCookie) {
        return (
            <div>
                <ProfilePage />
            </div>

        )
    } else {
        return (
            <>
                <ProfilePage />
            </>
        )
    }



}


export default profile