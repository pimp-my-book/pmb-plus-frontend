import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingFive } from 'umqombothi-component-library'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { GET_BOOKS_BY_DEGREE } from '../../graphql/Queries'
import BookCard from '../card/BookCard'

const BooksByDegree = () => {
    return (
        <>
            <h1>Books by degree</h1>

        </>
    )
}

export default BooksByDegree