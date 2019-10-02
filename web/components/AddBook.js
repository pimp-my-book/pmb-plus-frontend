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
                    <form
                        //onSubmit={handleSubmit}
                        className=" xl:h-500  mt-10"
                    ><HeadingOne
                            className="text-center s:text-left s:ml-5"
                            text="Sell your book"
                        />


                        <hr
                            className="border-greyDark"
                        />
                    </form>
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