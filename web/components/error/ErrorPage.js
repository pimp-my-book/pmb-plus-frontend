import React from 'react'
import { HeadingOne } from 'umqombothi-component-library'
import ErrorPic from '../../assets/fogg-fatal-error-3.png'
const ErrorPage = () => {
    return (
        <>
            <div>
                <HeadingOne text="Something went wrong here, we are on it and getting it sorted" />
                <img src={ErrorPic} alt="error pic" />

            </div>

        </>
    )
}
export default ErrorPage