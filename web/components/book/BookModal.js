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
