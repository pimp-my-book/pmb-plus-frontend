import React, { useState } from 'react'
import BooksByCouse from './BooksByCouse'
import BooksByDegree from './BooksByDegree'

const LandingPage = () => {
    return (
        <>
            <BooksByDegree />
            <BooksByCouse />
        </>
    )
}

export default LandingPage