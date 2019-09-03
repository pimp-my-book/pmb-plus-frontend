import React, { useState } from 'react'
import { Auth } from "aws-amplify";
import { HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'

const Signin = ({

}) => {

    const [values, setValues] = useState({ email: "", password: "" })

    const hanldeChange = (e) => {
        console.log(values)
        setValues({ [e.target.id]: e.target.value })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log(values.email)
            await Auth.signIn(values.email, values.password)
                .then(user => console.log(user))
            alert('Succees!')
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
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
                                    value={values.email}
                                    onChange={hanldeChange}
                                    placeholder="email@example.com"
                                />

                            </div>
                            <div>
                                <BodyText
                                    text="Password "
                                />
                                <Input
                                    type="password"
                                    onChange={hanldeChange}
                                    value={values.password}
                                    placeholder="email@example.com"
                                />

                            </div>
                            <div className="mt-4 flex flex-col">
                                <DarkPinkButton
                                    text='Login'
                                    type="submit"
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