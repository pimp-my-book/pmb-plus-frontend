import gql from "graphql-tag"

export const addBookMutation = gql`
mutation addBookMutation($input: addBookInput!){
    addBook(input:$input){
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

export const EDIT_BOOK_MUTATION = gql`
mutation EDIT_BOOK_MUTATION($input: editBookInput){
    editBook(input: $input)
}
`