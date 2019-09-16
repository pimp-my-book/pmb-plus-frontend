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
                    {/* Personal Info*/}
                    <div>
                        <hr
                            className="border-greyDark"
                        />

                        <div className="flex  p-5 justify-center">
                            <HeadingFive
                                text="Personal Info"
                                className="text-left"
                            />
                            {/* form components*/}
                            <div className="lg:ml-20">
                                {/* Full name*/}
                                <div>
                                    <BodyText
                                        text="Full Name"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        placeholder="Sizzla Kalonje"
                                    />

                                </div>
                                {/* University*/}
                                <div>
                                    <BodyText
                                        text="Univeristy "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        placeholder="UFS"
                                    />

                                </div>
                                {/* degree*/}
                                <div>
                                    <BodyText
                                        text="Degree "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        placeholder="BSC Geophysics"
                                    />

                                </div>

                                {/*delivery address*/}
                                <div>
                                    <BodyText
                                        text="Location "
                                    />
                                    <Textarea
                                        type="text"
                                        required
                                        placeholder="BSC Geophysics"
                                    />

                                </div>
                            </div>

                        </div>

                    </div>
                    {/*End of  Personal Info*/}

                    {/* Account  Info*/}
                    <div>
                        <hr
                            className="border-greyDark"
                        />
                        <div className="flex  justify-center">
                            <HeadingFive
                                text="Account Info"
                            />
                            <div
                                className="lg:ml-20"
                            >{/* Email*/}
                                <div>
                                    <BodyText
                                        text="Email address "
                                    />
                                    <Input
                                        type="email"
                                        required
                                        placeholder="sizzla@example.com"
                                    />

                                </div>

                                {/* password*/}
                                <div>
                                    <BodyText
                                        text="Password "
                                    />
                                    <Input
                                        type="password"
                                        required
                                        placeholder="a secret"
                                    />

                                </div>

                                {/* Confirm password*/}
                                <div>
                                    <BodyText
                                        text="Confirm Password "
                                    />
                                    <Input
                                        type="password"
                                        required
                                        placeholder="a secret"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End of  Account  Info*/}

                </form>

            </div>
        </>
    )
}

export default SignUp