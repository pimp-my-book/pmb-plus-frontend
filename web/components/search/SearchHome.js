/*
This is the search home page.

*There is a search bar that will allow a user to search for any
books

*Then there is a grid that will group titles
by their univeristy and allow the user to navigate
to the page of books for that Univeristy

*/


import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingThree } from 'umqombothi-component-library'
import { GET_BOOKS_BY_UNIVERSITY } from '../../graphql/Queries'
const SearchHome = () => {
    const { loading, data, error } = useQuery(GET_BOOKS_BY_UNIVERSITY)

    if (loading) return `We are busy get them books...`
    if (error) return `${error.message}`

    const books = data.getBooksByUniversity
    console.log(books)
    return (
        <>
            <div>
                <HeadingOne text="Search" />
                <div>
                    <HeadingThree text="Browse all" />
                </div>
            </div>
        </>
    )
}

export default SearchHome