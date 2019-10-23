import React, { useState } from 'react'
import BooksByCouse from './BooksByCouse'
import BooksByDegree from './BooksByDegree'

const index = () => {
    return (
        <>
            <BooksByDegree />
            <BooksByCouse />
        </>
    )
}