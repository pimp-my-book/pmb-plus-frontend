import { BodyText } from 'umqombothi-component-library'
import LandingPage from '../components/landing/index'
import config from '../config'
function Home() {
    console.log(process.env.ENV_STAGE)
    console.log(config)
    return (
        <>
            <LandingPage />

        </>
    )
}

export default Home