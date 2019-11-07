/*
This component is meant to allow the user to search
for books via the title/isbn or author

It uses Downshift for its Render Prop API

*/

import React, { useState } from 'react'
import { useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { Input } from 'umqombothi-component-library'
import Downshift from 'downshift'
import { SEARCH_ALL_BOOKS } from '../../graphql/Queries'
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


    const search = async (e, client) => {
        const result = await client.query({
            query: SEARCH_ALL_BOOKS,
            variables: { searchTerm: e.target.value }
        })
        console.log(result)

        setResults(result)

    }


    return (
        <>
            <Downshift
                itemToString={item => (item ? item.title : '')}
            >
                {({
                    getInputProps,
                    getItemProps,
                    isOpen,
                    inputValue,
                    highlightedIndex
                }) =>

                    <div>
                        <ApolloConsumer>
                            {client => (
                                <Input
                                    {...getInputProps({
                                        onChange: e => {
                                            e.persist()
                                            search(e, client)
                                        }
                                    })}
                                    placeholder="Search by title, ISBN or author"
                                />
                            )}
                        </ApolloConsumer>
                    </div>

                }

            </Downshift>

        </>
    )
}

export default SearchBar 