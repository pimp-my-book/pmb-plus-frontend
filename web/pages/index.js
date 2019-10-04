import { BodyText, HeadingOne } from 'umqombothi-component-library'

function Home() {


    return (
        <

            >
            <div
                className="landing "
            >
                <HeadingOne
                    className="text-white"
                    text="Welcome to PMB Plus" />


            </div>

            <style jsx>
                {`
    .landing {
       
        height: 100vh;
       
        
        background: linear-gradient(90deg, #249DC9 2.49%, #F9B4ED 76.81%, #F9B4ED 87.91%);
        
    }

   
    `}
            </style>
        </>
    )
}

export default Home