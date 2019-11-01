/*

This is a modal that allows the user to edit their book.
It will consume a mutation to to edit the book
*/

import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { HeadingOne, HeadingThree, HeadingFive, BodyText, Input, Textarea, DarkPinkButton } from 'umqombothi-component-library'
import FormGrid from '../FormGrid'
import { GET_ONE_BOOK } from '../../graphql/Queries'
import { EDIT_BOOK_MUTATION } from '../../graphql/Mutations'
const BookModal = ({ onHide, children, targetID, show, ...props }) => {


    const { loading, data, error } = useQuery(GET_ONE_BOOK, {
        variables: { ID: targetID }
    })

    if (loading) return 'loading your book...'
    if (error) return `${error.message}`

    const editableBook = data.getOneBook
    const [editBook] = useMutation(EDIT_BOOK_MUTATION)

    let priceRef, descriptionRef, imageRef, editionRef, titleRef, authorRef, ISBNRef, gradeRef, locationRef, univeristyRef, courseRef, degreeRef
    return (
        <>
            <div show={show} {...props} className=" top-0 bottom-0 left-0 right-0 flex justify-center align-center bg-white" >
                <div className="flex">
                    <span onClick={onHide} >&times;</span>
                </div>
                <div className="flex justify-center mb-20">
                    <form
                        onSubmit={async e => {
                            e.preventDefault()
                            await editBook({
                                variables: {
                                    input: {
                                        ID: targetID,
                                        price: priceRef,
                                        description: descriptionRef,
                                        image: imageRef,
                                        edition: editionRef,
                                        title: titleRef,
                                        author: authorRef,
                                        ISBN: ISBNRef,
                                        grade: gradeRef,
                                        location: locationRef,
                                        univeristy: univeristyRef,
                                        course: courseRef,
                                        degree: degreeRef
                                    }
                                }
                            })
                        }}
                    >
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
                                        defaultValue={editableBook.grade}

                                        ref={node => { gradeRef = node }}
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
                                        defaultValue={editableBook.price}
                                        ref={node => { priceRef = node }} placeholder="R4566"
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
                                        defaultValue={editableBook.location}
                                        ref={node => { locationRef = node }} placeholder="Cape Town"
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
                                        defaultValue={editableBook.description}
                                        ref={node => { descriptionRef = node }} placeholder="Used it for subject made me fail"
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
                                        defaultValue={editableBook.title}
                                        ref={node => { titleRef = node }} placeholder="How On Earth?"
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
                                        defaultValue={editableBook.author}
                                        ref={node => { authorRef = node }} placeholder="Terence McCathy"
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
                                        defaultValue={editableBook.ISBN}
                                        ref={node => { ISBNRef = node }} placeholder="978177074859"
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
                                        defaultValue={editableBook.edition}
                                        ref={node => { editionRef = node }} placeholder="4th"
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
                                        defaultValue={editableBook.univeristy}
                                        ref={node => { univeristyRef = node }} placeholder="UCT"
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
                                        defaultValue={editableBook.course}
                                        ref={node => { courseRef = node }} placeholder="CTV 109"
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
                                        defaultValue={editableBook.degree}
                                        ref={node => { degreeRef = node }} placeholder="BSC Chem"
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


            </div>
        </>
    )
}

export default BookModal
