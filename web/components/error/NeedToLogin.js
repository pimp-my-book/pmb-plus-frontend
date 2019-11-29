import React from 'react'
import Link from 'next/link'
import { HeadingTwo, LinkButton } from 'umqombothi-component-library'
import Login from '../../assets/login.png'
const NeedToLogin = () => {
    return (
        <>
            <div className="flex flex-col text-center mt-5">
                <HeadingTwo text="A world of possibilities awaits you, but you need to login first" />
                <div><LinkButton text="Let me login" href="/signin" /></div>
                <img src={Login} alt="you need to login" />

            </div>

        </>
    )
}

export default NeedToLogin