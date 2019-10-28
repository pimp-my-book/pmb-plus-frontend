import React from 'react'
import { HeadingFive } from 'umqombothi-component-library'
const BookCard = ({
    grade,
    img,
    price,
    title
}) => {
    return (
        <div className="w-300 h-450 shadow-xl">
            <div>
                <img src={img} alt="book image" className="w-full" />
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