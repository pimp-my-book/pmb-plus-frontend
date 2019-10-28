import React from 'react'
import { HeadingFive } from 'umqombothi-component-library'
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
                <HeadingFive text={title} />
                <HeadingFive text={price} />
                <HeadingFive text={grade} />
            </div>

        </div>
    )
}
export default BookCard