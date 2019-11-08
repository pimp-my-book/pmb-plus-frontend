import React from 'react'
import { HeadingFive } from 'umqombothi-component-library'

const UniCard = ({ uniName }) => {
    return (
        <>
            <div>
                <HeadingFive text={uniName} />

            </div>
        </>
    )
}

export default UniCard