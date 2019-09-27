import React, { useState } from 'react'
import Auth from '@aws-amplify/auth'
import styled from 'styled-components'
import { Alert, HeadingTwo, Input, LinkButton, BodyText, DarkPinkButton, HeadingOne } from 'umqombothi-component-library'

const ForgotPassword = ({ props }) => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
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
                            message={error}
                            error />
                    }
                </div>
                <div className="flex justify-center mb-20">
                    <form
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
                            message={error}
                            error />
                    }
                </div>
                <div className="flex justify-center mb-20">
                    <form
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
                                        value={email}
                                        type="email"
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email@example.com"
                                    />

                                </div>
                                <div>
                                    <BodyText
                                        text="New Password"
                                    />
                                    <Input
                                        value={email}
                                        type="email"
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email@example.com"
                                    />

                                </div>
                                <div>
                                    <BodyText
                                        text="Confirm new password"
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
                                        text='Reset password'
                                        type="submit"

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