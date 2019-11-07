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
import Link from 'next/link'
import { HeadingOne, HeadingThree } from 'umqombothi-component-library'
import { GET_BOOKS_BY_UNIVERSITY } from '../../graphql/Queries'
import Category from '../search/Category'

const SearchHome = () => {
    //get the data from the api
    const { loading, data, error } = useQuery(GET_BOOKS_BY_UNIVERSITY)

    if (loading) return `We are busy get them books...`
    if (error) return `${error.message}`


    //Group books by Univeristies
    const univeristies = data.getBooksByUniversity.reduce(function (r, a) { let key = a.univeristy; r[key] = r[key] || []; r[key].push(a); return r }, {})

    console.log(Object.keys(univeristies))
    return (
        <>
            <div>
                <HeadingOne text="Search" />
                <div>
                    <HeadingThree text="Browse all" />
                    {
                        Object.keys(univeristies).map(item => {
                            return (
                                <div>
                                    <Link

                                        href={`/categories/?uni=${item}`}
                                        as={`/categories/?uni=${item}`}
                                    >
                                        {item}
                                        <Category books={univeristies} />
                                    </Link>


                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchHome