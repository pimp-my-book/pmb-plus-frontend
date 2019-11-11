import React from 'react'
import { HeadingFive, BodyText } from 'umqombothi-component-library'
import locationIcon from '../../assets/location_on.svg'
import placeholer from '../../assets/placeholder_image.svg'
const BookCard = ({
    grade,
    img,
    price,
    title,
    location
}) => {
    return (
        <div className="w-300 h-450 shadow cursor-pointer">
            <div>
                <img src={img ? img : placeholer} alt="book image" className="w-full h-64 " />
            </div>
            <div className="flex flex-col p-2">
                <HeadingFive text={title} />
                <HeadingFive text={`R ${price}`} />
                <HeadingFive className="text-green" text={`Grade ${grade}`} />
                <div className="flex flex-row">
                    <img src={locationIcon} alt="location img" /> <BodyText text={location ? location : 'X'} />
                </div>
            </div>

        </div>
    )
}
export default BookCard