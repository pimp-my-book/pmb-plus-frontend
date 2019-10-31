/*

This is a modal that allows the user to edit their book.
It will consume a mutation to to edit the book
*/

import React from 'react'

const BookModal = ({ onHide, children, ...props }) => {
    return (
        <>
            <div {...props} className=" top-0 bottom-0 left-0 right-0 flex justify-center align-center bg-white" >
                <div className="flex">
                    <span onClick={onHide} >&times;</span>
                </div>

                {children}

            </div>
        </>
    )
}

export default BookModal
