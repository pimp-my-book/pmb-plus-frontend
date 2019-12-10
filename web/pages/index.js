import { BodyText } from 'umqombothi-component-library'
import LandingPage from '../components/landing/index'

function Home() {
    console.log(process.env.env_stage)

    return (
        <>
            <LandingPage />

        </>
    )
}

export default Home