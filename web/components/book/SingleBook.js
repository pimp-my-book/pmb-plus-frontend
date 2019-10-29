
/*
This component renders an indivual instance of a book
from the API. It needs an ID which it gets from 
querying the route path

*/
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingFive, BodyText } from 'umqombothi-component-library'
import { GET_ONE_BOOK } from '../../graphql/Queries'
import BookGrid from '../grids/BookGrid'

const SingleBook = ({ }) => {

    const router = useRouter()
    const { id } = router.query
    //console.log(id)
    const { loading, data, error } = useQuery(GET_ONE_BOOK, {
        variables: { ID: parseInt(id) }
    })
    if (loading) return 'loading..'
    if (error) return `${error.message}`

    // get the data from the array provided by the api
    const book = data.getOneBook
    return (

        <div>
            <BookGrid>

                {/*START:Top left spot */}
                <div>
                    <img src={book.image} alt={`Image of ${book.title}`} />
                </div>
                {/*END: Top left spot */}


                {/*START: Top Right*/}
                <div>
                    {book.title}
                </div>
                {/* END:Top Right*/}

                {/*START: bottom left*/}
                {/* END: bottom left*/}

                {/*START: bottom Right*/}
                {/* END: bottom Right*/}
            </BookGrid>

        </div>

    )
}

export default SingleBook