import React from 'react'
import { HeadingFive, BodyText } from 'umqombothi-component-library'
import location from '../../assets/location_on.svg'
const BookCard = ({
    grade,
    img,
    price,
    title,
    location
}) => {
    return (
        <div className="w-300 h-450 shadow">
            <div>
                <img src={img} alt="book image" className="w-full h-64 " />
            </div>
            <div className="flex flex-col p-2">
                <HeadingFive text={title} />
                <HeadingFive text={`R ${price}`} />
                <HeadingFive className="text-green" text={`Grade ${grade}`} />
                <div className="flex flex-row">
                    <img src={location} alt="location img" /> <BodyText text={location} />
                </div>
            </div>

        </div>
    )
}
export default BookCard