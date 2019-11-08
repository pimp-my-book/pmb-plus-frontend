/*
This component is meant to allow the user to search
for books via the title/isbn or author

It uses Downshift for its Render Prop API

The user is able to select a book and go view it
*/

import React, { useState } from 'react'
import Link from 'next/link'
import { useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { Input } from 'umqombothi-component-library'
import Downshift from 'downshift'
import { SEARCH_ALL_BOOKS } from '../../graphql/Queries'

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

        setResults(result.data.searchAllBooks)

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
                                        type: 'search',
                                        onChange: e => {
                                            e.persist()
                                            search(e, client)
                                        }
                                    })}
                                    placeholder="Search by title, ISBN or author"
                                />
                            )}
                        </ApolloConsumer>
                        {isOpen && (
                            <ul>
                                {results.map((item, index) => (
                                    <li
                                        {...getItemProps({
                                            key: item.id,
                                            index,
                                            item
                                        })}>
                                        <Link
                                            className="cursor-pointer"
                                            href={`/viewBook?id=${item.ID}`}
                                            as={`/viewBook?id=${item.ID}`}>
                                            {item.title}
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                }

            </Downshift>

        </>
    )
}

export default SearchBar 