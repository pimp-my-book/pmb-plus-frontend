import gql from 'graphql-tag'

export const HELLO = gql`
query HELLO {
    hello
}
`


//GET_LATEST_BOOKS
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
//GET_BOOKS_BY_DEGREE
export const GET_BOOKS_BY_DEGREE = gql`
query GET_BOOKS_BY_DEGREE{
    getBooksByDegree{
        ID
        title
        grade
        price
        image
        degree
    }
}
`
//GET_BOOKS_BY_COURSE
export const GET_BOOKS_BY_COURSE = gql`
query GET_BOOKS_BY_COURSE{
    getBooksByCourse{
        ID
        title
        grade
        price
        image
        course
    }
}
`
//GET_BOOKS_BY_MIN_PRICE
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
//GET_BOOKS_BY_MAX_PRICE
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
//GET_BOOKS_BY_UNIVERSITY
export const GET_BOOKS_BY_UNIVERSITY = gql`
query GET_BOOKS_BY_UNIVERSITY{
    getBooksByUniversity{
        ID
        title
        grade
        price
        image
        univeristy
    }
}
`


//GET_ONE_BOOK
export const GET_ONE_BOOK = gql`
 query GET_ONE_BOOK($ID: Int! ){
     getOneBook(ID:$ID){
            title
			description
			author
			grade
			price
			image
			edition
			location
			ISBN
			degree
			course
			univeristy
			ownerEmail
			ownerName
			owner
			dateUploaded
 }
 }
`