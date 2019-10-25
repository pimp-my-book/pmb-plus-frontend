import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS_BY_COURSE } from '../../graphql/Queries'
const BooksByCourse = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_BY_COURSE)
    if (loading) return 'loading..'
    if (error) return `${error.message}`

    let groupByCourse = data.getBooksByCourse.reduce((acc, it) => (acc[it.course] = it), {})
    let course = data.getBooksByCourse.reduce((h, obj) => Object.assign(h, { [obj.key]: (h[obj.key] || []).concat(obj) }), {})
    console.log(groupByCourse)
    console.log(course)
    const grouped = data.getBooksByCourse.reduce((acc, it) => acc.set(it.course, [...acc.get(it.course) || [], it]), new Map())
    console.log(grouped)
    return (
        <>
            <h1>Books by course</h1>
            {
                Object.keys(groupByCourse).map((item, index) => {
                    console.log(item, index)
                    let values = groupByCourse[item]
                    return (
                        <div key={index}>
                            {item}: {Object.values(values)[1]} {Object.values(values)[4]}
                        </div>
                    )
                })

            }
        </>
    )
}

export default BooksByCourse
/*

 Object.keys(groupByCourse).forEach(key => {
                    let value = groupByCourse[key]
                    console.log(`${key}: ${Object.values(value)}`);
                    return (
                        <div>
                            Hello
                            {key} : {Object.values(value)}
                        </div>
                    )
                })
*/