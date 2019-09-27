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

    const RenderRequestCodeForm = () => {
        return (
            <>
                renderRequestCodeForm

            </>
        )
    }

    const RenderConfirmationForm = () => {
        return (
            <>
                renderConfirmationForm
            </>
        )
    }

    const RenderSuccessMessage = () => {
        return (
            <>
                RenderSuccessMessage
            </>
        )
    }


    return (
        <>
            {!codeSent ? RenderRequestCodeForm() : !confirmed ? RenderConfirmationForm() : RenderSuccessMessage()}

        </>
    )
}

export default ForgotPassword