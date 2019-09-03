import React, { useState } from 'react'
import styled from 'styled-components'
import { HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'

const Signin = ({

}) => {

    const [values, setValues] = useState({ email: '', password: '' })

    const hanldeChange = (event) => {
        event.preventDefault();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }))
    }
    return (
        <>
            <div className="flex justify-center">
                <form
                    className="w-full max-w-lg h-400 xl:h-500 shadow-lg mt-10"
                >
                    <HeadingOne
                        text="Welcome Back"
                    />
                    <div
                        className="flex  justify-center p-10"
                    >

                        <div className="flex flex-col">
                            <div>
                                <BodyText
                                    text="Email Address"
                                />
                                <Input
                                    placeholder="email@example.com"
                                />

                            </div>
                            <div>
                                <BodyText
                                    text="Password "
                                />
                                <Input
                                    type="password"
                                    placeholder="email@example.com"
                                />

                            </div>
                            <div className="mt-4 flex flex-col">
                                <DarkPinkButton
                                    text='Login'

                                />
                                <LinkButton
                                    text="Forgot your password?"
                                    href="/forgot-password"
                                />
                            </div>
                        </div>
                    </div>



                </form>
            </div>
        </>
    )
}

export default Signin