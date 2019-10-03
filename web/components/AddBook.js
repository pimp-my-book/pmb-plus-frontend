import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks';
import { Alert, Textarea, HeadingOne, HeadingTwo, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton, HeadingFour } from 'umqombothi-component-library'
import SuccessImage from './fogg-success-1.svg'
import { addBookMutation } from '../graphql/Mutations'
const AddBook = () => {
    const [posted, setPosted] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [grade, setGrade] = useState("")
    const [price, setPrice] = useState("")
    const [edition, setEdition] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [ISBN, setISBN] = useState("")
    const [degree, setDegree] = useState("")
    const [course, setCourse] = useState("")
    const [univeristy, setUniveristy] = useState("")
    const [addBook, { data, error }] = useMutation(addBookMutation)
    const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
    grid-gap: 30px;
    `
    const renderPostBook = () => {
        return (
            <>
                <div
                    className="flex mt-5 justify-center">
                    {error &&
                        <Alert
                            message={error.message}
                            error />
                    }
                </div>
                <div className="flex justify-center mb-20">
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            addBook({
                                variables: {
                                    input: {
                                        price: price,
                                        description: description,
                                        image: image,
                                        edition: edition,
                                        title: title,
                                        author: author,
                                        ISBN: ISBN,
                                        grade: grade,
                                        location: location,
                                        univeristy: univeristy,
                                        course: course,
                                        degree: degree,
                                    }
                                }
                            })
                            setPosted(true)
                        }}
                        className=" xl:h-500  mt-10"
                    >
                        <HeadingOne
                            className="text-center s:text-left s:ml-5"
                            text="Lets sell your book"
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
                                {/* Price*/}
                                <div>
                                    <BodyText
                                        text="Price"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
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
                                        value={location}
                                        onChange={e => setLocation(e.target.value)}
                                        placeholder="Cape Town"
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
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
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
                                        value={author}
                                        onChange={e => setAuthor(e.target.value)}
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
                                        value={ISBN}
                                        onChange={e => setISBN(e.target.value)}
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
                                        value={edition}
                                        onChange={e => setEdition(e.target.value)}
                                        placeholder="4th"
                                    />

                                </div>

                                {/* Picture URL */}
                                <div>
                                    <BodyText
                                        text="URL"
                                    />
                                    <Input
                                        type="text"
                                        required
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
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
                                        value={univeristy}
                                        onChange={e => setUniveristy(e.target.value)}
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
                                        value={course}
                                        onChange={e => setCourse(e.target.value)}
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
                                        value={degree}
                                        onChange={e => setDegree(e.target.value)}
                                        placeholder="BSC Chem"
                                    />

                                </div>


                                {/* Buttons*/}
                                <div className="flex flex-col w-48 mt-3">
                                    <DarkPinkButton
                                        type="submit"
                                        text="Create account"
                                    />

                                </div>

                                {/* end  of accademic form elements */}
                            </div>
                        </FormGrid>
                        {/* end of bottom form container */}
                    </form>

                </div>

            </>
        )
    }

    const renderConfirmtionForm = () => {

        return (
            <>
                <div className="flex  flex-col items-center ">

                    <HeadingTwo
                        className="text-center"
                        text="Successful Book Post"
                    />
                    <img
                        src={SuccessImage}
                        className="w-1/2"
                        alt="success image"
                    />
                    <HeadingFive
                        text="Your book has been posted onto the marketplace and is now avaiable for purchase by other folks."
                    />
                    <div
                        className="p-10"
                    >
                        <LinkButton
                            href="/book"
                            text="Sell more"
                        />
                    </div>

                </div>
            </>
        )
    }
    return (
        <>
            {!posted ? renderPostBook() : renderConfirmtionForm()}
        </>
    )
}

export default AddBook