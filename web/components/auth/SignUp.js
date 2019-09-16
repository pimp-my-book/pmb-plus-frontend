import React, { useState } from 'react'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
import { Alert, HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


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
                    className="w-full xl:h-500 shadow-lg mt-10"
                >
                    <HeadingOne
                        className="text-center"
                        text="Lets get you set up!"
                    />
                    {/* Personal Info*/}
                    <div>
                        <hr
                            className="border-greyDark"
                        />

                    </div>

                    {/* Account  Info*/}
                    <div>

                    </div>


                </form>

            </div>
        </>
    )
}

export default SignUp