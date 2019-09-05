import React, { useState } from 'react'
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { HeadingOne, Input, LinkButton, BodyText, DarkPinkButton } from 'umqombothi-component-library'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import config from '../../config'

const amplifyConfig = {
    Auth: {
        mandatorySignIn: false,
        region: config.cognito.REGION,
        userPoolId: "us-east-1_OQfgqHOIe",
        identityPoolId: "us-east-1:a1479600-c174-4c52-84b4-460ecbfb4a07",
        userPoolWebClientId: '5uo9kjgbmrtugll1o0hv64c5t5'
    }
}


Amplify.configure(
    amplifyConfig
)

const Signin = ({

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





    const handleSubmit = event => {
        event.preventDefault();
        try {
            Auth.signIn(email, password)
                .then(user => console.log(user))
                .catch(e => console.log(e))

        } catch (e) {
            alert(e.message)
        }


    }

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

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
                                    value={email}
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
                                    onChange={e => setpassword(e.target.value)}
                                    value={password}
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