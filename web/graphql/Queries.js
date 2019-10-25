import gql from 'graphql-tag'

export const HELLO = gql`
query HELLO {
    hello
}
`

export const NAME = gql`
query NAME(){
    name(){

    }
}
`

export const GET_LATEST_BOOKS = gql`
query GET_LATEST_BOOKS{
    getLatestBooks{
        ID
        title
        grade
        price
        image
    }
}
`

export const GET_BOOKS_BY_DEGREE = gql`
query GET_BOOKS_BY_DEGREE{
    getBooksByDegree{
        ID
        title
        grade
        price
        image
    }
}
`

export const GET_BOOKS_BY_COURSE = gql`
query GET_BOOKS_BY_COURSE{
    getBooksByCourse{
        ID
        title
        grade
        price
        image
    }
}
`

export const GET_BOOKS_BY_MIN_PRICE = gql`
query GET_BOOKS_BY_MIN_PRICE{
    getBooksByMinPrice{
        ID
        title
        grade
        price
        image
    }
}
`

export const GET_BOOKS_BY_MAX_PRICE = gql`
query GET_BOOKS_BY_MAX_PRICE{
    getBooksByMaxPrice{
        ID
        title
        grade
        price
        image
    }
}
`