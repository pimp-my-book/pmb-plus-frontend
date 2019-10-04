import { HeadingFive, HeadingOne } from 'umqombothi-component-library'

function Home() {


    return (
        <>
            <div
                className="landing  flex flex-col items-center text-center p-5"
            >
                <HeadingOne
                    className="text-white"
                    text="Welcome to PMB Plus" />

                <HeadingFive
                    className=" mb-5"
                    text={`You're here a bit early 😁`}
                />
                <HeadingFive
                    className=" mb-1"
                    text={`Nonetheless it's great to have you here. Pimp My Book as 
                          been passionate about helping students get their hands on cheap second hand books since forever.
                          Hence we would like to introduce a new service to make getting second hand books easier!😀 
                    `}
                />
                <HeadingFive
                    className=" mb-20"
                    text={`Keep checking back here for when we have awesome news to share with you! 😍 
                    `}
                />
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