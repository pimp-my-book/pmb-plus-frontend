import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingFive } from 'umqombothi-component-library'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { GET_BOOKS_BY_DEGREE } from '../../graphql/Queries'
import BookCard from '../card/BookCard'
import responsive from '../../utils/responsive'
const BooksByDegree = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_BY_DEGREE)
    if (loading) return 'loading...'
    if (error) return `${error.message}`

    const result = data.getBooksByDegree.reduce(function (r, a) { let key = a.degree; r[key] = r[key] || []; r[key].push(a); return r }, {})
    console.log(data.getBooksByDegree)
    console.log(result)

    return (
        <>

            {
                Object.keys(result).map((item, index) => {
                    let values = result[item]
                    return (
                        <div key={index} className="mt-5 p-2">
                            <HeadingFive
                                text={`${item} books`}
                            />
                            <Carousel
                                ssr
                                arrows={false}
                                responsive={responsive}>

                                {values.map(book => (
                                    <div key={book.ID}>
                                        <BookCard
                                            grade={book.grade}
                                            img={book.image}
                                            price={book.price}
                                            title={book.title}
                                            location={book.location}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )
                })
            }

        </>
    )
}

export default BooksByDegree