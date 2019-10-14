import React, { useState } from 'react'
import { Auth } from "aws-amplify";
import Router from 'next/router'
import cookie from 'js-cookie'
import { Alert, HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'


const Signin = ({
    props
}) => {


    const hanldeChange = (e) => {


        // e.persist()
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
        // setValues(values => ({ ...values, [e.target.name]: e.target.value }))

    }

    const hanldeChange2 = (e) => {


        setpassword(

            e.target.value
        );


    }





    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log(process.env.STAGING)
            console.log(process.env.NODE_ENV)
            setLoading(true)
            const signInDetails = await Auth.signIn(email, password)
            console.log(signInDetails)
            cookie.set('token', signInDetails.signInUserSession.idToken.jwtToken)
            if (Object.keys(signInDetails).length > 0) {
                //props.isAuthenticated(true)
                Router.push('/profile')
            }

        } catch (e) {
            setError(e.message)
            console.log(error)
            setLoading(false)

        }


    }

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)
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
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg h-400 xl:h-500 shadow-lg mt-10"
                >
                    <HeadingOne
                        className="text-center"
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
                                    value={email}
                                    type="email"
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="email@example.com"
                                />

                            </div>
                            <div>
                                <BodyText
                                    text="Password "
                                />
                                <Input
                                    type="password"
                                    required
                                    onChange={e => setpassword(e.target.value)}
                                    value={password}
                                    placeholder="something secret"
                                />

                            </div>
                            <div className="mt-4 flex flex-col">
                                <DarkPinkButton
                                    text='Login'
                                    type="submit"
                                    isLoading={isLoading}
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