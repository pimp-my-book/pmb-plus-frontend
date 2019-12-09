import { BodyText } from 'umqombothi-component-library'
import LandingPage from '../components/landing/index'

function Home() {
    console.log(process.env.NODE_ENV)

    return (
        <>
            <LandingPage />

        </>
    )
}

export default Home