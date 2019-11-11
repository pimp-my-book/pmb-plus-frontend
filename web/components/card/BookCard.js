import React from 'react'
import { HeadingFive } from 'umqombothi-component-library'
const BookCard = ({
    grade,
    img,
    price,
    title
}) => {
    return (
        <div className="w-300 h-450 shadow">
            <div>
                <img src={img} alt="book image" className="w-full h-86 " />
            </div>
            <div className="flex flex-col">
                <HeadingFive text={title} />
                <HeadingFive text={`R ${price}`} />
                <HeadingFive text={`Grade ${grade}`} />
            </div>

        </div>
    )
}
export default BookCard