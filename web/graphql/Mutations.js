import gql from "graphql-tag"

//addBookMutation
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

//EDIT_BOOK_MUTATION
export const EDIT_BOOK_MUTATION = gql`
mutation EDIT_BOOK_MUTATION($input: editBookInput){
    editBook(input: $input)
}
`

//DEACTIVATE_BOOK
export const DEACTIVATE_BOOK = gql`
mutation DEACTIVATE_BOOK($owner: String!, $ID: Int!){
    deactivateBook(owner:$owner,ID: $ID)
}
`