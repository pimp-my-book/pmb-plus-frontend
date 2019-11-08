import React from 'react'
import { HeadingFive } from 'umqombothi-component-library'

const UniCard = ({ uniName }) => {
    return (
        <>
            <div className="w-1/4 h-16 shadow-xl rounded">
                <HeadingFive className="p-2" text={uniName} />

            </div>
        </>
    )
}

export default UniCard