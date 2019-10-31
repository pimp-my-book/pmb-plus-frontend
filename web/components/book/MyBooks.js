import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingThree, HeadingFive, BodyText } from 'umqombothi-component-library'
import { GET_MY_BOOKS } from '../../graphql/Queries'
import Edit from '../../assets/edit.svg'
const MyBooks = () => {
    const { loading, data, error } = useQuery(GET_MY_BOOKS, {
        variables: { owner: '94c3ae75-5a32-4c44-bc17-e80cbfc006a7' }
    })

    if (loading) return 'loading...'
    if (error) return `${error.message}`

    const books = data.getMyBooks
    return (
        <>
            <div>
                <HeadingOne text=" My books" />

                {
                    books.map(book => (
                        (
                            <div className="flex flex-row p-10">
                                <img className="w-24 h-24 mr-10" src={book.image} alt="book image" />  <HeadingFive className="mr-10" text={book.title ? book.title : 'Blank Title'} />  <img src={Edit} alt="edit icon" />
                            </div>
                        )
                    )
                    )
                }
            </div>

        </>
    )
}

export default MyBooks

