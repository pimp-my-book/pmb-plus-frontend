import React from 'react'
import ContentLoader from 'react-content-loader'

const BookPlaceholder = () => {
    return (
        <ContentLoader>
            <rect x="0" y="0" rx="5" ry="5" width="150" height="70" />

            <rect x="0" y="120" rx="4" ry="4" width="120" height="13" />
            <rect x="0" y="100" rx="3" ry="3" width="140" height="10" />
            <rect x="0" y="75" rx="3" ry="3" width="150" height="10" />
        </ContentLoader>
    )
}

export default BookPlaceholder