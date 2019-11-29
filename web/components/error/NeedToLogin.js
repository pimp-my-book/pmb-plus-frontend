import React from 'react'
import Link from 'next/link'
import Login from '../../assets/Login.png'
const NeedToLogin = () => {
    return (
        <>
            <img src={Login} alt="you need to login" />
        </>
    )
}

export default NeedToLogin