import React, { useState } from 'react'
import { Alert, HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const AddBook = () => {
    const [error, setError] = useState("")
    const [posted, setPosted] = useState(false)

    const renderPostBook = () => {
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

                </div>

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