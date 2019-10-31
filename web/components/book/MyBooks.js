/*
This component is meant to render all the users'
books to allow them to edit and deactive their books

It its the API for the `getMyBooks` query. It has
state to handle the editing of the book via modal

*/

import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingThree, HeadingFive, BodyText, Input, Textarea, DarkPinkButton } from 'umqombothi-component-library'
import { GET_MY_BOOKS } from '../../graphql/Queries'
import Edit from '../../assets/edit.svg'
import BookModal from './BookModal'
import FormGrid from '../FormGrid'
const MyBooks = () => {

    //state
    const [show, setShow] = useState(false)

    const [targetID, setTargetID] = useState(0)
    //query hook
    const { loading, data, error } = useQuery(GET_MY_BOOKS, {
        variables: { owner: '94c3ae75-5a32-4c44-bc17-e80cbfc006a7' }
    })

    if (loading) return 'loading...'
    if (error) return `${error.message}`

    const books = data.getMyBooks


    //Fucntions to handle closing and opening of modal
    const handleClose = () => setShow(false)
    const handleShow = (ID) => {
        setShow(true)
        setTargetID(ID)
    }
    return (
        <>
            <div>
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
            {show && <BookModal
                show={show}
                onHide={handleClose}
            >
                <div className="flex justify-center mb-20">
                    <form>
                        <HeadingOne
                            className="text-center s:text-left s:ml-5"
                            text="Time to edit your book"
                        />

                        {targetID}
                        <hr
                            className="border-greyDark"
                        />
                        {/* Start of top form container */}
                        <FormGrid
                            className="s:ml-10 mb-5"
                        >
                            <HeadingFive
                                text="Starter Info"
                                className="text-left"
                            />
                            <div>
                                {/* Grade*/}
                                <div>
                                    <BodyText
                                        text="Grade"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        // value={grade}
                                        //   onChange={e => setGrade(e.target.value)}
                                        placeholder="A"
                                    />

                                </div>
                                {/* Price*/}
                                <div>
                                    <BodyText
                                        text="Price"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        // value={price}
                                        //  onChange={e => setPrice(e.target.value)}
                                        placeholder="R4566"
                                    />

                                </div>
                                {/* Location*/}
                                <div>
                                    <BodyText
                                        text="Where is your book? "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        //  value={location}
                                        // onChange={e => setLocation(e.target.value)}
                                        placeholder="Cape Town"
                                    />

                                </div>
                                {/* Description*/}
                                <div>
                                    <BodyText
                                        text="Describe your book"
                                    />
                                    <Textarea
                                        type="text"
                                        required
                                        //value={description}
                                        // onChange={e => setDescription(e.target.value)}
                                        placeholder="Used it for subject made me fail"
                                    />

                                </div>
                            </div>
                        </FormGrid>



                        {/* End of top form container */}
                        <hr
                            className="border-greyDark"
                        />
                        {/* start of bottom form container */}
                        <FormGrid
                            className="s:ml-10"
                        >
                            <HeadingFive
                                text="Book Info"
                            />
                            {/* start of account form elements */}
                            <div>
                                {/* Title*/}
                                <div>
                                    <BodyText
                                        text="Title "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        // value={title}
                                        // onChange={e => setTitle(e.target.value)}
                                        placeholder="How On Earth?"
                                    />

                                </div>

                                {/* Author */}
                                <div>
                                    <BodyText
                                        text="Author "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        // value={author}
                                        /// onChange={e => setAuthor(e.target.value)}
                                        placeholder="Terence McCathy"
                                    />

                                </div>

                                {/* ISBN*/}
                                <div>
                                    <BodyText
                                        text="ISBN"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        //value={ISBN}
                                        // onChange={e => setISBN(e.target.value)}
                                        placeholder="978177074859"
                                    />

                                </div>

                                {/* Edition */}
                                <div>
                                    <BodyText
                                        text="Edition"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        // value={edition}
                                        // onChange={e => setEdition(e.target.value)}
                                        placeholder="4th"
                                    />

                                </div>

                                {/* Picture URL */}
                                <div>
                                    <BodyText
                                        text="URL"
                                    />
                                    <Input
                                        type="file"

                                        // value={image}

                                        placeholder="IMAGE"
                                    />

                                </div>

                                {/* end  of book form elements */}
                            </div>
                        </FormGrid>
                        {/* end of bottom form container */}

                        {/* End of top form container */}
                        <hr
                            className="border-greyDark"
                        />
                        {/* start of bottom form container */}
                        <FormGrid
                            className="s:ml-10"
                        >
                            <HeadingFive
                                text="Academic Info"
                            />
                            {/* start of Academic form elements */}
                            <div>
                                {/* univeristy*/}
                                <div>
                                    <BodyText
                                        text="Select univeristy "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        //  value={univeristy}
                                        //  onChange={e => setUniveristy(e.target.value)}
                                        placeholder="UCT"
                                    />

                                </div>

                                {/* cOURSE */}
                                <div>
                                    <BodyText
                                        text="Course "
                                    />
                                    <Input
                                        type="text"
                                        required
                                        //  value={course}
                                        // onChange={e => setCourse(e.target.value)}
                                        placeholder="CTV 109"
                                    />

                                </div>

                                {/* dEGREE*/}
                                <div>
                                    <BodyText
                                        text="Degree"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        //  value={degree}
                                        //  onChange={e => setDegree(e.target.value)}
                                        placeholder="BSC Chem"
                                    />

                                </div>


                                {/* Buttons*/}
                                <div className="flex flex-col w-48 mt-3">
                                    <DarkPinkButton
                                        type="submit"
                                        text="Create account"
                                    //isLoading={mutationError ? !isLoading : isLoading}
                                    />

                                </div>

                                {/* end  of accademic form elements */}
                            </div>
                        </FormGrid>
                        {/* end of bottom form container */}
                    </form>
                </div>
            </BookModal>}

        </>

    )
}

export default MyBooks

