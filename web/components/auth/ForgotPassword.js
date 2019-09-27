import React, { useState } from 'react'
import Auth from '@aws-amplify/auth'
import { Alert, HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'

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
                <form>

                </form>

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
                renderConfirmationForm
            </>
        )
    }



    /*

This form shows the user that the reset was successfull
    */
    const RenderSuccessMessage = () => {
        return (
            <>
                RenderSuccessMessage
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