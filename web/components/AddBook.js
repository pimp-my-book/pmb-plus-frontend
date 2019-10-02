import React, { useState } from 'react'
import styled from 'styled-components'
import { Alert, HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const AddBook = () => {
    const [error, setError] = useState("")
    const [posted, setPosted] = useState(false)
    const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
    grid-gap: 30px;
    `
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