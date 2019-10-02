import gql from "graphql-tag"

export const addBookMutation = gql`
mutation ADD_BOOK($book: addBookInput!){
    addBook(book:$book){
        price
    description
    image
    edition
    title
    author
    ISBN
    grade
    location
    univeristy
    course
    degree
    }
}
`