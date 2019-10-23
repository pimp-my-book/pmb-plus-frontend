import React, { useState } from 'react'
import styled from 'styled-components'
import { Storage } from 'aws-amplify'
import { useMutation, Mutation } from '@apollo/react-hooks';
import Cookie from 'js-cookie'
import { Alert, Textarea, HeadingOne, HeadingTwo, HeadingFive, Input, LinkButton, BodyText, DarkPinkButton, HeadingFour } from 'umqombothi-component-library'
import SuccessImage from './fogg-success-1.svg'
import { addBookMutation } from '../graphql/Mutations'
import { s3Upload } from '../lib/awsLib'
import FormGrid from './FormGrid'
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
    const [isLoading, setIsLoading] = useState(false)
    const [addBook, { data, error: mutationError }] = useMutation(addBookMutation)

    //File upload state
    let [file, setFile] = useState(null)
    const [imageURL, setimageURL] = useState("")


    const handleFileChange = async event => {
        file = event.target.files[0]

        try {

            window.LOG_LEVEL = 'DEBUG';
            const attachment = file ? await s3Upload(file) : null
            const s3URI = await Storage.get(`${attachment}`, { level: 'public' })
            //console.log(attachment)
            console.log(s3URI)

            setImage(`${s3URI}`)
            //console.log(image)


            // console.log(data)
            // setPosted(true)

        } catch (e) {
            alert(e)
        }


        setFile(file)
        console.log(file)
    }


    const handleSubmit = async (event) => {

        event.preventDefault()

        try {




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
            // console.log(data)
            setPosted(true)

        } catch (e) {
            alert(e)
        }

    }

    const renderPostBook = () => {
        const hasCookie = Cookie.get('token')

        if (!hasCookie) {
            return (

                <>
                    <div
                        className="flex mt-5 justify-center">
                        {mutationError &&
                            <Alert
                                message={mutationError.message}
                                error />
                        }
                    </div>
                    <div className="flex justify-center mb-20">
                        <form
                            onSubmit={async e => {
                                e.preventDefault()
                                const attachment = file ? await s3Upload(file) : null
                                const s3URI = await Storage.get(`${attachment}`, { level: 'public' })
                                //console.log(attachment)
                                // console.log(s3URI)
                                setIsLoading(true)
                                setImage(`${s3URI}`)
                                //console.log(image)
                                await addBook({
                                    variables: {
                                        input: {
                                            price: price,
                                            description: description,
                                            image: s3URI,
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
                                setIsLoading(false)
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
                                    {/* Grade*/}
                                    <div>
                                        <BodyText
                                            text="Grade"
                                        />
                                        <Input
                                            type="text"
                                            required
                                            value={grade}
                                            onChange={e => setGrade(e.target.value)}
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
                                    {/* Description*/}
                                    <div>
                                        <BodyText
                                            text="Describe your book"
                                        />
                                        <Textarea
                                            type="text"
                                            required
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
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
                                            type="file"

                                            // value={image}
                                            onChange={e => {
                                                file = e.target.files[0]
                                            }}
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
                                            isLoading={mutationError ? !isLoading : isLoading}
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

    } else {
        return (
            <div>
                You need to be logged in
        </div>
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