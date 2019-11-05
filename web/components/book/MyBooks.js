/*
This component is meant to render all the users'
books to allow them to edit and deactive their books

It its the API for the `getMyBooks` query. It has
state to handle the editing of the book via modal


To be able to render the modal the component needs to be split up into two

*/

import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingThree, HeadingFive, BodyText, Input, Textarea, DarkPinkButton } from 'umqombothi-component-library'
import { GET_MY_BOOKS } from '../../graphql/Queries'
import Edit from '../../assets/edit.svg'
import BookModal from './BookModal'
import FormGrid from '../FormGrid'
import { GET_ONE_BOOK } from '../../graphql/Queries'



const MyBooks = () => {

    //state
    const [show, setShow] = useState(false)

    const [targetID, setTargetID] = useState("")
    //query hook - for users books
    const { loading, data, error } = useQuery(GET_MY_BOOKS, {
        variables: { owner: '94c3ae75-5a32-4c44-bc17-e80cbfc006a7' }
    })


    if (loading) return 'loading...'
    if (error) return `${error.message}`

    const books = data.getMyBooks



    //Fucntions to handle closing and opening of modal
    const handleClose = () => setShow(false)
    //Here we need to set the ID of the book in order to feed it to the query
    const handleShow = (ID) => {
        setShow(true)
        setTargetID(parseInt(ID))
    }
    return (
        <>
            <div className="mb-20">
                <HeadingOne text=" My books" />

                {
                    books.map(book => (
                        (
                            <div className="flex flex-row p-10">
                                <img className="w-24 h-24 mr-10" src={book.image} alt="book image" />  <HeadingFive className="mr-10" text={book.title ? book.title : 'Blank Title'} />  <img src={Edit} alt="edit icon" onClick={() => handleShow(book.ID)} />
                            </div>
                        )
                    )
                    )
                }
            </div>
            {show ? <BookModal targetID={targetID} show={show} /> : null}

        </>

    )
}

export default MyBooks

