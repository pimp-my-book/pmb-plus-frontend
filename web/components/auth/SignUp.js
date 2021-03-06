/*
Sign up form allows the user to signup to the service. 

First the user will enter their details in the form with the following state:

email
password
confirmPassword
fullName
univeristy
phoneNumber
degree
address

Then once the form is submited, a confirmation code is sent to
their email and a the <RenderConfirmationForm/> is rendered to
accept the confirmationCode, then the user can go ahead and enter the 
code and get redirected.
 
*/

import React, { useState } from 'react'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
import Cookie from 'js-cookie'
import { Alert, Textarea, HeadingOne, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'
import FormGrid from '../grids/FormGrid'

const SignUp = ({ }) => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [univeristy, setUniveristy] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [degree, setDegree] = useState("")
    const [address, setAddress] = useState("")
    const [newUser, setNewUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [confirmationCode, setConfirmationCode] = useState("")
    const [resend, setResend] = useState(false)


    //Functions 
    //handleSubmit
    const handleSubmit = async event => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const newUser = await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    'custom:FullName': fullName, 'custom:University': univeristy, 'custom:Degree': degree, 'custom:Address': address, 'custom:phoneNumber': phoneNumber
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
        //setIsLoading(true)

        try {
            await Auth.confirmSignUp(email, confirmationCode)
            await Auth.signIn(email, password)
            const token = await Auth.currentSession()
            Cookie.set('token', token.idToken.jwtToken)
            Router.push('/profile')

        } catch (e) {
            setError(e.message)
            //setIsLoading(false)
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

    //RENDER FORM
    const RenderForm = () => {
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
                        onSubmit={handleSubmit}
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
                                        value={fullName}
                                        onChange={e => setFullName(e.target.value)}
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
                                        value={univeristy}
                                        onChange={e => setUniveristy(e.target.value)}
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
                                        value={degree}
                                        onChange={e => setDegree(e.target.value)}
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
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        placeholder="10 Downing Street"
                                    />

                                </div>
                                {/*Phone Number*/}
                                <div>
                                    <BodyText
                                        text="Phone Number"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        value={phoneNumber}
                                        onChange={e => setPhoneNumber(e.target.value)}
                                        placeholder="083213294"
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
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
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
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
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
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        placeholder="a secret"
                                    />

                                </div>
                                {/* Buttons*/}
                                <div className="flex flex-col w-48 mt-3">
                                    <DarkPinkButton
                                        type="submit"
                                        text="Create account"
                                    />
                                    <LinkButton
                                        href="/signin"
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

    const RenderConfirmationForm = () => {
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
                        onSubmit={handleConfirmationSubmit}
                        className="w-full max-w-lg h-400 xl:h-500 shadow-lg mt-10"
                    >
                        <HeadingOne
                            className="text-center"
                            text="Enter Confirmation Code"
                        />
                        <div className="flex justify-center p-10">
                            <div className="flex flex-col">
                                <div>
                                    <BodyText
                                        text="Confirmation Code"
                                    />
                                    <Input
                                        value={confirmationCode}
                                        type="text"
                                        required
                                        onChange={e => setConfirmationCode(e.target.value)}
                                        placeholder="234342"
                                    />

                                </div>
                                <div className="mt-4 flex flex-col ">
                                    <DarkPinkButton
                                        text='Confirm code'
                                        type="submit"
                                    // isLoading={isLoading}
                                    />
                                    <LinkButton
                                        text="Resend code?"
                                        className="mb-10"
                                        onChange={resendCode}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    return (
        <>
            {
                newUser === null
                    ? RenderForm()
                    : RenderConfirmationForm()
            }
        </>
    )
}

export default SignUp