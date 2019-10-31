/*

This is a modal that allows the user to edit their book.
It will consume a mutation to to edit the book
*/

import React from 'react'

const BookModal = ({ show, onHide, children, ...props }) => {
    return (
        <>
            <div show={show} onHide={onHide} {...props}>
                {children}

            </div>
        </>
    )
}

export default BookModal
