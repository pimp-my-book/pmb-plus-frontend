
/*
This component renders an indivual instance of a book
from the API. It needs an ID which it gets from 
querying the route path

*/
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingTwo, HeadingFive, BodyText } from 'umqombothi-component-library'
import { GET_ONE_BOOK } from '../../graphql/Queries'
import BookGrid from '../grids/BookGrid'
import Avatar from '../../assets/Avatar_Shape.svg'
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

        <div className="s:flex s:flex-col">
            <BookGrid>

                {/*START:Top left spot */}
                <div className="w-full">
                    <img src={book.image} alt={`Image of ${book.title}`} />
                </div>
                {/*END: Top left spot */}


                {/*START: Top Right*/}
                <div className="p-10">
                    <HeadingOne text={book.title} />
                    <div className="flex flex-row mt-5">
                        <HeadingFive className="mr-2" text="Price" />  <HeadingFive className="text-green" text={`R ${book.price}`} />
                    </div>
                    <div className="flex flex-row mt-5">
                        <HeadingFive className="mr-2" text="Grade" />      <HeadingFive text={book.grade} />
                    </div>
                    <div className="flex flex-row mt-5">
                        <img src={Avatar} alt="avatar" />  <HeadingFive text={book.ownerName} />
                    </div>


                </div>
                {/* END:Top Right*/}

                {/*START: bottom left*/}
                <div className="c">
                    <HeadingTwo text="Book details" />
                    <BodyText text={book.author} />
                    <BodyText text={book.ISBN} />
                    <BodyText text={book.edition} />

                </div>
                {/* END: bottom left*/}

                {/*START: bottom Right*/}
                <div className="d">

                    <HeadingFive text={book.location} />

                </div>
                {/* END: bottom Right*/}
            </BookGrid>

        </div>

    )
}

export default SingleBook