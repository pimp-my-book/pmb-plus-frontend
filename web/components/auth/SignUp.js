import React, { useState } from 'react'
import Auth from "@aws-amplify/auth";
import Router from 'next/router'
import styled from 'styled-components'
import { Alert, Textarea, HeadingOne, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const SignUp = ({ }) => {
    const [error, setError] = useState("")

    const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
    `


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
                    className=" xl:h-500  mt-10"
                >
                    <HeadingOne
                        className="text-center"
                        text="Lets get you set up!"
                    />


                    <hr
                        className="border-greyDark"
                    />
                    {/* Start of top form container */}
                    <FormGrid>
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
                                    placeholder="BSC Geophysics"
                                />

                            </div>
                        </div>
                    </FormGrid>

                    {/* Start of left col */}

                    {/* end of left col */}


                    {/* Start of right col */}


                    {/* Start of inner-form col */}



                    {/* end of inner-form col */}
                    {/* end of left col */}


                    {/* End of top form container */}
                </form>

            </div>
        </>
    )
}

export default SignUp