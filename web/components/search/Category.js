import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingTwo, HeadingFive, BodyText } from 'umqombothi-component-library'
import BookCard from '../card/BookCard'

import { GET_BOOKS_AT_A_UNIVERSITY } from '../../graphql/Queries'
const Category = () => {
    const router = useRouter()
    const { uni } = router.query
    const { loading, data, error } = useQuery(GET_BOOKS_AT_A_UNIVERSITY, {
        variables: { university: uni }
    })

    if (loading) return `Busy getting books from ${uni}`
    if (error) return `${error.message}`
    console.log(data)

    const books = data.getBooksAtAUniversity
    return (
        <>
            <HeadingOne text={`Books from ${uni} `} />
            {
                books.map(book => {
                    return (
                        <div>
                            <BookCard
                                grade={book.grade}
                                img={book.image}
                                price={book.price}
                                title={book.title}
                            />
                        </div>
                    )
                })
            }
        </>
    )


}

export default Category

