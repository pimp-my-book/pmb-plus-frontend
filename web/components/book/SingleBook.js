
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
import ViewBookPlaceholder from '../../components/loading/ViewBookPlaceholder'
import placeholer from '../../assets/placeholder_image.svg'
import ErrorPage from '../error/ErrorPage'
import Phone from '../../assets/phone.svg'
const SingleBook = ({ }) => {

    const router = useRouter()
    const { id } = router.query
    console.log(typeof id)
    const { loading, data, error } = useQuery(GET_ONE_BOOK, {
        variables: { ID: parseInt(id) }
    })
    if (loading) return (
        <div className="mb-5" >
            <ViewBookPlaceholder />
        </div>
    )
    if (error) return <ErrorPage />

    // get the data from the array provided by the api
    const book = data.getOneBook
    console.log(book)
    return (

        <div className="s:flex s:flex-col">
            <BookGrid>

                {/*START:Top left spot */}
                <div className="p-32">
                    <img src={book.image ? book.image : placeholer} alt={`Image of ${book.title}`} />
                </div>
                {/*END: Top left spot */}


                {/*START: Top Right*/}
                <div className="p-10">
                    <HeadingTwo text={book.title} />
                    <div className="flex flex-row mt-5">
                        <HeadingFive className="mr-2" text="Price" />  <HeadingFive className="text-green" text={`R ${book.price}`} />
                    </div>
                    <div className=" mt-5 text-center bg-orangeLightest rounded-lg w-32 ">
                        <HeadingFive className="mr-2  text-orangeDarkest ml-2 " text={`Grade ${book.grade ? book.grade : 'N/A'}`} />
                    </div>

                    <div className="flex flex-row mt-5">
                        <img src={Avatar} alt="avatar" />  <HeadingFive text={book.ownerName ? book.ownerName : 'There appears to be no owner for this book'} />
                    </div>
                    {book.ownerPhone &&
                        <div className="flex flex-row mt-5">
                            <img src={Phone} alt="avatar" />  <HeadingFive className="ml-5" text={book.ownerPhone} />
                        </div>
                    }


                </div>
                {/* END:Top Right*/}

                {/*START: bottom left*/}
                <div className="p-5">
                    <HeadingTwo text="Book details" />
                    <div className="flex flex-row mt-5">
                        <img src={Face} alt="face_icon" /> <HeadingFive className="mr-2 p-2" text="Author" /> <BodyText className="p-3" text={book.author} />
                    </div>
                    <div className="flex flex-row mt-5">
                        <img src={ConfIcon} alt="ISBN" /> <HeadingFive className="mr-2 p-2" text="ISBN" /> <BodyText className="p-3" text={book.ISBN} />
                    </div>
                    <div className="flex flex-row mt-5">

                        <img src={LibBooks} alt="edition_icon" />   <HeadingFive className="mr-2 p-2" text="Edition" /><BodyText className="p-3" text={book.edition} />
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