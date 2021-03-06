/*
Forgot password

Basicall this components hits the cognito API to allow the user to 
request a password reset.

steps:
1 the user enters their emaill address, then a code is sent to their email
2. Then they need to enter the code provided via their email
3. Once the code is accepted, they can go ahaead and set a new password.

There are three components that are rendered based on state

the <RenderRequestCodeForm/> is rendered on load, then isSendingCode === true
so the <RenderConfirmationForm/> is rendered then codeSent === true and confirmed === true
so the <RenderSuccessMessage/> can be rendered
*/

import React, { useState } from 'react'
import Auth from '@aws-amplify/auth'
import styled from 'styled-components'
import { Alert, HeadingTwo, Input, LinkButton, BodyText, DarkPinkButton, HeadingOne } from 'umqombothi-component-library'

const ForgotPassword = ({ props }) => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isConfirming, setIsConfirming] = useState(false)
    const [isSendingCode, setIsSendingCode] = useState(false)
    const [codeSent, setCodeSent] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    //errors to display on RequestCodeForm
    const [emailError, setEmailError] = useState("")
    //errors to display on ConfirmationForm
    const [confirmError, setConfirmError] = useState("")
    const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
    grid-gap: 30px;
    `

    /// Sumbit event for Sending code to email
    const handleSendCodeClick = async event => {
        event.preventDefault()
        setIsSendingCode(true)

        try {

            await Auth.forgotPassword(email)
            setCodeSent(true)
        } catch (e) {
            setEmailError(e.message)
            setIsSendingCode(false)
        }

    }

    ///Submit event for confirming code and submitting a new password

    const handleConfirmClick = async event => {
        event.preventDefault()

        setIsConfirming(true)

        try {
            await Auth.forgotPasswordSubmit(email, code, password)
            setConfirmed(true)
        } catch (e) {
            setConfirmError(e.message)
            setIsConfirming(false)
        }
    }


    //validation of confirmation passwords [Not done]

    const validateResetForm = () => {
        return (

            password === confirmPassword
        )
    }



    /*

This form shows the initial form for the user to 
request a reset.
    */
    const RenderRequestCodeForm = () => {
        return (
            <>
                <div
                    className="flex mt-5 justify-center">
                    {error &&
                        <Alert
                            message={emailError}
                            error />
                    }
                </div>
                <div className="flex justify-center mb-20">
                    <form
                        onSubmit={handleSendCodeClick}
                        className=" w-full max-w-lg h-400 xl:h-500 shadow-lg mt-10"
                    >
                        <HeadingTwo
                            className="text-center s:text-left s:ml-5"
                            text="Wanna reset your password?"
                        />

                        <div className="flex justify-center p-10">
                            <div className="flex flex-col">

                                <div>
                                    <BodyText
                                        text="Email Address"
                                    />
                                    <Input
                                        value={email}
                                        type="email"
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email@example.com"
                                    />

                                </div>
                                <div className="mt-4 flex flex-col">
                                    <DarkPinkButton
                                        text='Send code'
                                        type="submit"
                                        isLoading={isSendingCode}
                                    />

                                </div>

                            </div>
                        </div>

                    </form>
                </div>

            </>
        )
    }

    /*

This form allows the user to enter the code they recieved
in their inbox and set a new password.
    */
    const RenderConfirmationForm = () => {
        return (
            <>

                <div
                    className="flex mt-5 justify-center">
                    {error &&
                        <Alert
                            message={confirmError}
                            error />
                    }
                </div>
                <div className="flex justify-center mb-20">
                    <form
                        onSubmit={handleConfirmClick}
                        className=" w-full max-w-lg h-400 xl:h-500 shadow-lg mt-10"
                    >
                        <HeadingTwo
                            className="text-center s:text-left s:ml-5"
                            text="Time to hit reset!"
                        />

                        <div className="flex justify-center p-10">
                            <div className="flex flex-col">

                                <div>
                                    <BodyText
                                        text="Confirmation Code"
                                    />
                                    <Input
                                        value={code}
                                        type="text"
                                        required
                                        onChange={e => setCode(e.target.value)}
                                        placeholder="email@example.com"
                                    />

                                </div>
                                <div>
                                    <BodyText
                                        text="New Password"
                                    />
                                    <Input
                                        value={password}
                                        type="password"
                                        required
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="email@example.com"
                                    />

                                </div>
                                <div>
                                    <BodyText
                                        text="Confirm new password"
                                    />
                                    <Input
                                        value={confirmPassword}
                                        type="password"
                                        required
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        placeholder="email@example.com"
                                    />

                                </div>
                                <div className="mt-4 flex flex-col">
                                    <DarkPinkButton
                                        text='Reset password'
                                        type="submit"
                                        isLoading={isConfirming}
                                        disabled={!validateResetForm()}
                                    />

                                </div>

                            </div>
                        </div>

                    </form>
                </div>

            </>
        )
    }



    /*

This form shows the user that the reset was successfull
    */
    const RenderSuccessMessage = () => {
        const ImgURL = "https://s3.amazonaws.com/zansi-static-assest/Illustrations/undraw_finish_line_katerina_limpitsouni_xy20.svg";
        return (
            <>
                <div className="flex  flex-col items-center ">

                    <HeadingTwo
                        className="text-center"
                        text="You have successfully reset your password"
                    />
                    <img
                        src={ImgURL}
                        className="w-1/2"
                        alt="success image"
                    />
                    <div
                        className="p-10"
                    >
                        <LinkButton
                            href="/signin"
                            text="Login"
                        />
                    </div>

                </div>
            </>
        )
    }


    return (
        <>
            {/* 
        first we ask if the code has been sent - if not 
        then show RenderRequestCodeForm()

        second we ask if you have not been confirmed, then we
        show the user  RenderConfirmationForm()

        */}
            {!codeSent ? RenderRequestCodeForm() : !confirmed ? RenderConfirmationForm() : RenderSuccessMessage()}

        </>
    )
}

export default ForgotPassword