import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingFive } from 'umqombothi-component-library'
import { GET_BOOKS_BY_COURSE } from '../../graphql/Queries'
import BookCard from '../card/BookCard'

const BooksByCourse = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_BY_COURSE)
    if (loading) return 'loading..'
    if (error) return `${error.message}`

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


    /*
        for (var i = 0, len = result.length; i < len; i++) {
            for (var j = 0, len2 = result[i].length; j < len2; j++) {
                console.log(result[i][j])
            }
        }*/
    return (
        <>
            <h1>Books by course</h1>
            {
                Object.keys(result).map((item, index) => {
                    console.log(item, index)
                    let values = result[item]
                    console.log(values)
                    return (
                        <div key={index}>
                            <HeadingFive
                                text={`${item} books`}
                            /> {values.map(book => (
                                <div>

                                    <BookCard
                                        grade={book.grade}
                                        img={book.image}
                                        price={book.price}
                                        title={book.title}
                                    />
                                </div>
                            ))}
                        </div>
                    )
                })

            }
        </>
    )
}

export default BooksByCourse