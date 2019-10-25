import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_BOOKS_BY_COURSE } from '../../graphql/Queries'


const BooksByCourse = () => {
    const { loading, error, data } = useQuery(GET_BOOKS_BY_COURSE)
    if (loading) return 'loading..'
    if (error) return `${error.message}`

    /*
This the pseduo code for getting all the course by degree:

What we want is to group all entries by unquie instance of a course
--> then we want to be able to sum the number of books by that course 
--> as well as display all books linked to that course


```
{
    "course_1":{
        {
            "book_1"
        },
        {
            "book_2"
        }
        ,
        {
            "book_3"
        }
        ,
        {
            "book_4"
        },
        4
    },
    "course_2":{
        {
            "book_5"
        },
        {
            "book_6"
        }
        ,
        {
            "book_7"
        }
        ,
        {
            "book_8"
        }
    },
    "course_3":{
        {
            "book_9"
        },
        {
            "book_10"
        }
        ,
        {
            "book_11"
        }
        ,
        {
            "book_12"
        }
    }
}

```

    */
    let groupByCourse = data.getBooksByCourse.reduce((acc, it) => (



        acc[it.course] = it,
        Object.assign(acc, it)






    ), {})




    let course = data.getBooksByCourse.reduce((h, obj) => Object.assign(h, { [obj.key]: (h[obj.key] || []).concat(obj) }), {})
    console.log(groupByCourse)
    console.log(course)
    const grouped = data.getBooksByCourse.reduce((acc, it) => acc.set(it.course, [...acc.get(it.course) || [], it]), new Map())
    const result = data.getBooksByCourse.reduce(function (r, a) { let key = a.course; r[key] = r[key] || []; r[key].push(a); return r }, {})
    console.log(grouped)
    console.log(result)
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