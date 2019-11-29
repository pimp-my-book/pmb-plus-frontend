import Cookie from 'js-cookie'
import ProfilePage from '../components/profile/ProfilePage'
import NeedToLogin from '../components/error/NeedToLogin'
const profile = (props) => {
    //console.log(props)
    const hasCookie = Cookie.get('token')

    if (!hasCookie) {
        return (
            <NeedToLogin />

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