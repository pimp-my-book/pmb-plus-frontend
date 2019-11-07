/*
This component is meant to allow the user to search
for books via the title/isbn or author

It uses Downshift for its Render Prop API

*/

import React from 'react'
import { useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { Input } from 'umqombothi-component-library'
import Downshift from 'downshift'

const SearchBar = () => {
    return (
        <>
            <Input

                placeholder="Search by title, ISBN or author"
            />
        </>
    )
}

export default SearchBar