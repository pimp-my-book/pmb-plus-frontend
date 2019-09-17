import React, { useState } from 'react'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
import { Alert, Textarea, HeadingOne, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const SignUp = ({ }) => {
    const [error, setError] = useState("")

    return (
        <>
            <div
                className="flex mt-5 justify-center">
                {error &&
                    <Alert
                        message={error}
                        error />
                }
            </div>
            <div className="flex justify-center mb-20">
                <form
                    className=" xl:h-500  mt-10"
                >
                    <HeadingOne
                        className="text-center"
                        text="Lets get you set up!"
                    />

                    {/* Start of top form container */}

                    <div className="flex flex-row">


                    </div>

                    {/* End of top form container */}
                </form>

            </div>
        </>
    )
}

export default SignUp