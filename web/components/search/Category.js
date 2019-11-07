import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { HeadingOne, HeadingTwo, HeadingFive, BodyText } from 'umqombothi-component-library'

import { GET_BOOKS_AT_A_UNIVERSITY } from '../../graphql/Queries'
const Category = () => {
    const router = useRouter()
    const { uni } = router.query
    const { loading, data, error } = useQuery(GET_BOOKS_AT_A_UNIVERSITY, {
        variables: { university: uni }
    })

    console.log(data)
    return (
        <>
            <HeadingOne text={`Books from ${uni} `} />

        </>
    )


}

export default Category