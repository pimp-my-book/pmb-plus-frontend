import React from 'react'
import styled from 'styled-components'
import { HeadingOne, Input, LinkButton, BodyText } from 'umqombothi-component-library'

const Signin = ({

}) => {


    return (
        <>
            <div>
                <form
                    className="w-full max-w-lg xl:h-500 shadow-lg mt-10"
                >
                    <HeadingOne
                        text="Welcome Back"
                    />
                    <div
                        className="flex flex-col"
                    >

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
                    </div>



                </form>
            </div>
        </>
    )
}

export default Signin