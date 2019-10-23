import React, { useState } from 'react'
import BooksByCourse from './BooksByCourse'
import BooksByDegree from './BooksByDegree'

const LandingPage = () => {
    return (
        <>
            <BooksByDegree />
            <BooksByCourse />
        </>
    )
}

export default LandingPage