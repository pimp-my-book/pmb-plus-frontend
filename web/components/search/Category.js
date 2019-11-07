import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS_AT_A_UNIVERSITY } from '../../graphql/Queries'
const Category = ({ books }) => {
    const router = useRouter()
    const { uni } = router.query
    const { loading, data, error } = useQuery(GET_BOOKS_AT_A_UNIVERSITY, {
        variables: { university: uni }
    })

    console.log(data)
    return (
        <>
            This page will show all the categories for a certain book by univeristy
            {books}
        </>
    )


}

export default Category