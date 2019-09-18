import React, { useState } from 'react'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
import styled from 'styled-components'
import { Alert, Textarea, HeadingOne, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const SignUp = ({ }) => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [univeristy, setUniveristy] = useState("")
    const [degree, setDegree] = useState("")
    const [address, setAddress] = useState("")
    const [newUser, setNewUser] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [confirmationCode, setConfirmationCode] = useState("")
    const [resend, setResend] = useState(false)
    const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
    grid-gap: 30px;
    `

    //Functions 
    const handleSubmit = async event => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const newUser = await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    'custom:FullName': fullName, 'custom:University': univeristy, 'custom:Degree': degree, 'custom:Address': address
                }
            })

            setNewUser(newUser)

        } catch (e) {
            setError(e.message)
        }
    }

    //handle confirmation submit 
    const handleConfirmationSubmit = async event => {
        event.preventDefault()
        setIsLoading(true)

        try {
            await Auth.confirmSignUp(email, confirmationCode)
            await Auth.signIn(email, password)
            Router.push('/profile')

        } catch (e) {
            setError(e.message)
            setIsLoading(false)
        }

    }


    const resendCode = async event => {
        try {
            await Auth.resendCode(email)
            setResend(true)
        }
        catch (e) {
            setError(e.message)
        }
    }
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
                        className="text-center s:text-left s:ml-5"
                        text="Lets get you set up!"
                    />


                    <hr
                        className="border-greyDark"
                    />
                    {/* Start of top form container */}
                    <FormGrid
                        className="s:ml-10 mb-5"
                    >
                        <HeadingFive
                            text="Personal Info"
                            className="text-left"
                        />
                        <div>
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
                    </FormGrid>



                    {/* End of top form container */}
                    <hr
                        className="border-greyDark"
                    />
                    {/* start of bottom form container */}
                    <FormGrid
                        className="s:ml-10"
                    >
                        <HeadingFive
                            text="Account Info"
                        />
                        {/* start of account form elements */}
                        <div>
                            {/* Email*/}
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
                            {/* Buttons*/}
                            <div class="flex flex-col w-48 mt-3">
                                <DarkPinkButton
                                    text="Create account"
                                />
                                <LinkButton
                                    text="Already have an account?"
                                />
                            </div>
                            {/* start of account form elements */}
                        </div>
                    </FormGrid>
                    {/* end of bottom form container */}
                </form>

            </div>
        </>
    )
}

export default SignUp