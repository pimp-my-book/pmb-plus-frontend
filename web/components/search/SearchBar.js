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