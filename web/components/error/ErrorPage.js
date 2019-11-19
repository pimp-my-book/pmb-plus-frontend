import React from 'react'
import { HeadingThree } from 'umqombothi-component-library'
import ErrorPic from '../../assets/later.png'
const ErrorPage = () => {
    return (
        <>
            <div className="flex flex-col text-center">
                <HeadingThree text="Something went wrong here, we are on it and getting it sorted" />
                <img src={ErrorPic} alt="error pic" className="h-750" />

            </div>

        </>
    )
}
export default ErrorPage