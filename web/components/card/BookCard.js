/*
The book card is meant to render a book.

It has the following props: 
grade,
    img,
    price,
    title,
    location

    If the image is not defined it renders a fall back
*/

import React from 'react'
import Link from 'next/link'
import { HeadingFive, BodyText } from 'umqombothi-component-library'
import locationIcon from '../../assets/location_on.svg'
import placeholer from '../../assets/placeholder_image.svg'
const BookCard = ({
    ID,
    grade,
    img,
    price,
    title,
    location
}) => {
    return (
        <Link
            className="cursor-pointer"
            href='/viewBook/id'
            as={`/viewBook/${book.ID}`}>
            <div className="w-300 h-490 shadow cursor-pointer mb-5">
                <div>
                    <img src={img ? img : placeholer} alt="book image" className="w-full h-64 " />
                </div>
                <div className="flex flex-col p-2">
                    <HeadingFive text={title} />
                    <HeadingFive text={`R ${price}`} />
                    <HeadingFive className="text-green" text={`Grade ${grade}`} />
                    <div className="flex flex-row">
                        <img src={locationIcon} alt="location img" className="mb-8" /> <BodyText text={location ? location : 'X'} />
                    </div>
                </div>

            </div>
        </Link>
    )
}
export default BookCard