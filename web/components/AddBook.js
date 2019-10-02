import React, { useState } from 'react'
import { Alert, HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const AddBook = () => {
    const [error, setError] = useState("")
    const [posted, setPosted] = useState(false)

    const renderPostBook = () => {
        return (
            <>
                renderPostBook
            </>
        )
    }

    const renderConfirmtionForm = () => {
        return (
            <>
                renderConfirmtionForm
            </>
        )
    }
    return (
        <>
            {!posted ? renderPostBook() : renderConfirmtionForm()}
        </>
    )
}

export default AddBook