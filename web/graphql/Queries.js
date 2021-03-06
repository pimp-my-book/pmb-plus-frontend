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
        location
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
        location

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
            ownerPhone
 }
 }
`

//GET_MY_BOOKS
export const GET_MY_BOOKS = gql`
query GET_MY_BOOKS($owner: String!){
    getMyBooks(owner: $owner){
        ID
        title
        image
    }
}
`

//getBooksAtAUniversity
export const GET_BOOKS_AT_A_UNIVERSITY = gql`
query GET_BOOKS_AT_A_UNIVERSITY($university: String!){
    getBooksAtAUniversity(university:$university){
        ID
        title
        grade
        price
        image
        univeristy
    }
}
`

//searchAllBooks
export const SEARCH_ALL_BOOKS = gql`
query SEARCH_ALL_BOOKS($searchTerm: String!){
    searchAllBooks(searchTerm: $searchTerm){
        ID
        title
        image
    }
}
`
// getUsersSettings
export const GET_USERS_SETTINGS = gql`
query GET_USERS_SETTINGS($userID: String!){
    getUsersSettings(userID: $userID){
        ID
        showEmail
        showNumber
        __typename
    }
}
`