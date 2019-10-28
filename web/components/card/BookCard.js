import React from 'react'
import HeadingFour from 'umqombothi-component-library'
const BookCard = ({
    grade,
    img,
    price,
    title
}) => {
    return (
        <div>
            <div>
                <img src={img} alt="book image" />
            </div>
            <div>
                <HeadingFour text={title} />
                <HeadingFour text={price} />
                <HeadingFour text={grade} />
            </div>

        </div>
    )
}
export default BookCard