
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
import MapPlaceholder from '../../assets/Map_Placeholder.svg'
import Face from '../../assets/face.svg'
import ConfIcon from '../../assets/confirmation_number.svg'
import LibBooks from '../../assets/library_books.svg'

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
                <div className="p-32">
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
                <div className="p-5">
                    <HeadingTwo text="Book details" />
                    <div className="flex flex-row mt-5">
                        <img src={Face} alt="face_icon" /> <HeadingFive className="mr-2" text="Author" /> <BodyText className="p-1" text={book.author} />
                    </div>
                    <div className="flex flex-row mt-5">
                        <img src={ConfIcon} alt="ISBN" /> <HeadingFive className="mr-2" text="ISBN" /> <BodyText className="p-1" text={book.ISBN} />
                    </div>
                    <div className="flex flex-row mt-5">

                        <img src={LibBooks} alt="edition_icon" /> <HeadingFive className="mr-2" text="ISBN" />   <HeadingFive className="mr-2" text="Edition" /><BodyText className="p-1" text={book.edition} />
                    </div>




                </div>
                {/* END: bottom left*/}

                {/*START: bottom Right*/}
                <div className="d">

                    <HeadingFive text={`This book was posted near ${book.location}`} />
                    <img src={MapPlaceholder} alt="map_placeholder" />

                </div>
                {/* END: bottom Right*/}
            </BookGrid>

        </div>

    )
}

export default SingleBook