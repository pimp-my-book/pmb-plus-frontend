/*
This component is meant to allow the user to search
for books via the title/isbn or author

It uses Downshift for its Render Prop API

*/

import React, { useState } from 'react'
import { useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { Input } from 'umqombothi-component-library'
import Downshift from 'downshift'
/*
TO DO

- ADD STATE
- ADD QUERY
- ADD ON CHANGE FUNCTION
*/
const SearchBar = () => {
    //STATE TO STORE THE SEARCH RESULTS
    const [results, setResults] = useState([])
    //STATE FOR THE USERS SEARCH QUERY
    const [searchTerm, setSearchTerm] = useState("")
    //Search query to API
    const { loading, error, data } = useQuery(useQuery, {
        variables: { searchTerm: 'el' }
    })
    return (
        <>
            <Input

                placeholder="Search by title, ISBN or author"
            />
        </>
    )
}

export default SearchBar 