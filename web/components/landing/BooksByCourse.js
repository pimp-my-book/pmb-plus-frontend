import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS_BY_COURSE } from '../../graphql/Queries'
const BooksByCourse = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_BY_COURSE)
    if (loading) return 'loading..'
    if (error) return `${error.message}`

    const groupByCourse = data.getBooksByCourse
    return (
        <>
            <h1>Books by course</h1>
            {data.getBooksByCourse.map(book => (
                <div key={book.ID}>
                    {book.title}
                </div>
            ))}
        </>
    )
}

export default BooksByCourse
