import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { GET_ONE_BOOK } from '../../graphql/Queries'

const SingleBook = ({ }) => {

    const router = useRouter()
    const { id } = router.query
    //console.log(id)
    const { loading, data, error } = useQuery(GET_ONE_BOOK, {
        variables: { ID: parseInt(id) }
    })
    if (loading) return 'loading..'
    if (error) return `${error.message}`

    return (

        <div>
            {data.getOneBook.title}
        </div>

    )
}

export default SingleBook