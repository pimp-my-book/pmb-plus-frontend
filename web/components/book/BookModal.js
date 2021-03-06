/*
This component is incomplete:

* ability to upload another image
* The footer hangs on the modal!! use REACT_BOOTSTRAP


*/

import React, { Component, createRef } from 'react'
import { Query, Mutation } from '@apollo/react-components'
import { HeadingOne, HeadingThree, HeadingFive, BodyText, Textarea, DarkPinkButton } from 'umqombothi-component-library'
import FormGrid from '../grids/FormGrid'
import { GET_ONE_BOOK } from '../../graphql/Queries'
import { EDIT_BOOK_MUTATION } from '../../graphql/Mutations'
import Input from '../inputs/Input'
import MyBooksPlaceholder from '../../components/loading/MyBooksPlaceholder'

export default class BookModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }

        this.priceRef = createRef()
        this.descriptionRef = createRef()
        this.imageRef = createRef()
        this.editionRef = createRef()
        this.titleRef = createRef()
        this.authorRef = createRef()
        this.ISBNRef = createRef()
        this.gradeRef = createRef()
        this.locationRef = createRef()
        this.univeristyRef = createRef()
        this.courseRef = createRef()
        this.degreeRef = createRef()


    }
    render() {
        const { targetID, show, onHide } = this.props
        return (
            <>
                <Query
                    query={GET_ONE_BOOK}
                    variables={{ ID: targetID }}
                >
                    {({ error, loading, data }) => {
                        if (loading) return (
                            <>
                                <MyBooksPlaceholder />
                            </>)
                        if (error) return `${error.message}`

                        const editableBook = data.getOneBook


                        return (
                            <Mutation
                                mutation={EDIT_BOOK_MUTATION}
                            >
                                {(editBook, { error, loading, called }) => {
                                    if (error) {
                                        return (<p>Something went wrong</p>)
                                    }
                                    if (called && !error) {
                                        return (<p>You have successfully edited this book</p>)
                                    }

                                    else {
                                        return (
                                            <>
                                                <div show={this.props.show} className="absolute mb-20 top-0 bottom-0 left-0 right-0 flex justify-center align-center bg-white" >
                                                    <div className="flex">
                                                        <span onClick={this.props.onHide} >&times;</span>
                                                    </div>
                                                    <div className="flex justify-center mb-20">

                                                        <form
                                                            onSubmit={async e => {
                                                                e.preventDefault()
                                                                this.setState({ isLoading: true })
                                                                await editBook({
                                                                    variables: {
                                                                        input: {
                                                                            ID: targetID,
                                                                            price: this.priceRef.current.value,
                                                                            description: this.descriptionRef.current.value,
                                                                            // image: this.imageRef.current.value,
                                                                            edition: this.editionRef.current.value,
                                                                            title: this.titleRef.current.value,
                                                                            author: this.authorRef.current.value,
                                                                            ISBN: this.ISBNRef.current.value,
                                                                            grade: this.gradeRef.current.value,
                                                                            location: this.locationRef.current.value,
                                                                            univeristy: this.univeristyRef.current.value,
                                                                            course: this.courseRef.current.value,
                                                                            degree: this.degreeRef.current.value
                                                                        }
                                                                    }
                                                                })
                                                            }}
                                                        >
                                                            <HeadingOne
                                                                className="text-center s:text-left s:ml-5"
                                                                text="Time to edit your book"
                                                            />


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
                                                                            ref={this.gradeRef}
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
                                                                            ref={this.priceRef}

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
                                                                            ref={this.locationRef} placeholder="Cape Town"
                                                                        />

                                                                    </div>
                                                                    {/* Description*/}
                                                                    <div>
                                                                        <BodyText
                                                                            text="Describe your book"
                                                                        />
                                                                        <Input
                                                                            type="text"
                                                                            required
                                                                            defaultValue={editableBook.description}
                                                                            ref={this.descriptionRef} placeholder="Used it for subject made me fail"
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
                                                                            ref={this.titleRef} placeholder="How On Earth?"
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
                                                                            ref={this.authorRef} placeholder="Terence McCathy"
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
                                                                            ref={this.ISBNRef} placeholder="978177074859"
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
                                                                            ref={this.editionRef} placeholder="4th"
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
                                                                            ref={this.univeristyRef} placeholder="UCT"
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
                                                                            ref={this.courseRef} placeholder="CTV 109"
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
                                                                            ref={this.degreeRef} placeholder="BSC Chem"
                                                                        />

                                                                    </div>


                                                                    {/* Buttons*/}
                                                                    <div className="flex flex-col w-48 mt-3">
                                                                        <DarkPinkButton
                                                                            type="submit"
                                                                            text="Edit book"
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
                                }}
                            </Mutation>
                        )
                    }}
                </Query>
            </>
        )
    }
}