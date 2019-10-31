/*

This is a modal that allows the user to edit their book.
It will consume a mutation to to edit the book
*/

import React from 'react'

const BookModal = ({ onHide, children, ...props }) => {
    return (
        <>
            <div {...props} >
                <span onClick={onHide} >&times;</span>
                {children}

            </div>
        </>
    )
}

export default BookModal
