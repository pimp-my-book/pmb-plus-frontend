import { BodyText } from 'umqombothi-component-library'
import Amplify, { Auth } from 'aws-amplify'
import config from '../config'

console.log(config)
Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
})
function Home() {


    return (
        <>
            <div>PMB Plus Front-End! 🤩 </div>

        </>
    )
}

export default Home