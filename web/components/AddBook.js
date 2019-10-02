import React, { useState } from 'react'
import styled from 'styled-components'
import { Alert, Textarea, HeadingOne, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


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
                        // onSubmit={handleSubmit}
                        className=" xl:h-500  mt-10"
                    >
                        <HeadingOne
                            className="text-center s:text-left s:ml-5"
                            text="Lets sell your book"
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
                                {/* Price*/}
                                <div>
                                    <BodyText
                                        text="Price"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        //   value={fullName}
                                        //  onChange={e => setFullName(e.target.value)}
                                        placeholder="R4566"
                                    />

                                </div>
                                {/* Location*/}
                                <div>
                                    <BodyText
                                        text="Where is your book? "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        // value={univeristy}
                                        //  onChange={e => setUniveristy(e.target.value)}
                                        placeholder="Cape Town"
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
                                        // value={email}
                                        // onChange={e => setEmail(e.target.value)}
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
                                        // value={password}
                                        // onChange={e => setPassword(e.target.value)}
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
                                        // value={confirmPassword}
                                        // onChange={e => setConfirmPassword(e.target.value)}
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