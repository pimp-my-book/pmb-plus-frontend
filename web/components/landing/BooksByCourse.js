import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingFive } from 'umqombothi-component-library'
import Carousel from 'react-multi-carousel'
import Link from 'next/link'
import 'react-multi-carousel/lib/styles.css'
import { GET_BOOKS_BY_COURSE } from '../../graphql/Queries'
import BookCard from '../card/BookCard'
import BookPlaceholder from '../loading/BookPlaceholder'
import ErrorPage from '../error/ErrorPage'

const BooksByCourse = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_BY_COURSE)
    if (loading) return (
        <div >
            <div className="mb-5 mt-5 p-3">
                <BookPlaceholder />

            </div>
            <div className="mb-5 mt-5 p-3">
                <BookPlaceholder />

            </div>
        </div>
    )
    if (error) return <ErrorPage />

    /*
This the pseduo code for getting all the course by degree:

What we want is to group all entries by unquie instance of a course
--> then we want to be able to sum the number of books by that course 
--> as well as display all books linked to that course


```
{
    "course_1":{
        {
            "book_1"
        },
        {
            "book_2"
        }
        ,
        {
            "book_3"
        }
        ,
        {
            "book_4"
        },
        4
    },
    "course_2":{
        {
            "book_5"
        },
        {
            "book_6"
        }
        ,
        {
            "book_7"
        }
        ,
        {
            "book_8"
        }
    },
    "course_3":{
        {
            "book_9"
        },
        {
            "book_10"
        }
        ,
        {
            "book_11"
        }
        ,
        {
            "book_12"
        }
    }
}

```

    */

    const result = data.getBooksByCourse.reduce(function (r, a) { let key = a.course; r[key] = r[key] || []; r[key].push(a); return r }, {})

    console.log(result)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <>

            {
                Object.keys(result).map((item, index) => {
                    console.log(item, index)
                    let values = result[item]
                    console.log(values)
                    return (
                        <div key={index} >
                            <HeadingFive
                                className="mt-5"
                                text={`${item} books`}
                            />

                            <Carousel
                                ssr
                                arrows={false}
                                responsive={responsive}>
                                {values.map(book => (

                                    <div key={book.ID} className="mb-5">

                                        <BookCard
                                            ID={book.ID}
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

export default BooksByCourse