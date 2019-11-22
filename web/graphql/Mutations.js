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

//MARK_AS_SOLD

export const MARK_AS_SOLD = gql`
mutation MARK_AS_SOLD($owner: String!, $ID: Int!){
    markAsSold(owner:$owner,ID: $ID)
}
`

//showEmail
export const SHOW_EMAIL = gql`
mutation SHOW_EMAIL($showEmail: Boolean,$userID: String){
    showEmail(showEmail:$showEmail,userID:$userID)
}
`

//showNumber
export const SHOW_NUMBER = gql`
mutation SHOW_NUMBER($showNumber: Boolean,$userID: String){
    showNumber(showNumber: $showNumber,userID: $userID)
}
`
//hideEmail
export const HIDE_EMAIL = gql`
mutation HIDE_EMAIL($showEmail: Boolean,$userID: String){
    hideEmail(showEmail:$showEmail,userID:$userID)
}
`
//hideNumber