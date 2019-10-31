import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_MY_BOOKS } from '../../graphql/Queries'

const MyBooks = () => {
    const { loading, data, error } = useQuery(GET_MY_BOOKS, {
        variables: { owner: '94c3ae75-5a32-4c44-bc17-e80cbfc006a7' }
    })

    if (loading) return 'loading...'
    if (error) return `${error.message}`

    const books = data.getMyBooks
    return (
        <>
            <div>
                My books
                {
                    Object.keys(books).map((item, index) => {
                        let values = result[item]
                        return (
                            <div key={index}>
                                {
                                    values.map(myBooks => (
                                        <div key={myBooks.ID}>
                                            {myBooks.title}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default MyBooks