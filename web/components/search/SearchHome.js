/*
This is the search home page.

*There is a search bar that will allow a user to search for any
books

*Then there is a grid that will group titles
by their univeristy and allow the user to navigate
to the page of books for that Univeristy

*/
import React from 'react'
import { HeadingOne, HeadingThree } from 'umqombothi-component-library'
const SearchHome = () => {
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