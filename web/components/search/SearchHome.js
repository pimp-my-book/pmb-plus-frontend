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
import Category from '../search/Category'
import SearchBar from './SearchBar'
import UniCard from '../card/UniCard'
import SearchGrid from '../grids/SearchGrid'
import SearchPlaceholder from '../loading/SearchPlaceholder'
import ErrorPage from '../error/ErrorPage'
const SearchHome = () => {
    //get the data from the api
    const { loading, data, error } = useQuery(GET_BOOKS_BY_UNIVERSITY)


    if (loading) return (

        <>
            <SearchGrid className="p-5">
                {Array(12)
                    .fill('')
                    .map(i => <SearchPlaceholder key={i} />)}
            </SearchGrid>
        </>
    )
    if (error) return <ErrorPage />


    //Group books by Univeristies
    const univeristies = data.getBooksByUniversity.reduce(function (r, a) { let key = a.univeristy; r[key] = r[key] || []; r[key].push(a); return r }, {})

    console.log(Object.keys(univeristies))
    return (
        <>
            <div className="p-3">
                <HeadingOne text="Search" />
                <SearchBar />
                <div>
                    <HeadingThree text="Browse all" />
                    <SearchGrid >
                        {
                            Object.keys(univeristies).map(item => {
                                return (
                                    <div >

                                        <UniCard uniName={item} />





                                    </div>
                                )
                            })
                        }
                    </SearchGrid>

                </div>
            </div>
        </>
    )
}

export default SearchHome