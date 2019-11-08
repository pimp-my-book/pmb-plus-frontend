import React, { useState } from 'react'
import { HeadingFive } from 'umqombothi-component-library'
import { colours } from '../../utils/colours'


const UniCard = ({ uniName }) => {
    //https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
    const newColour = Object.keys(colours)[Math.floor(Math.random() * Object.keys(colours).length)]






    return (
        <>
            <div className={`w-3/4 h-24 shadow-xl mb-5 mt-5 rounded bg-${newColour}`}>
                <HeadingFive className="p-2" text={uniName} />

            </div>
        </>
    )
}

export default UniCard