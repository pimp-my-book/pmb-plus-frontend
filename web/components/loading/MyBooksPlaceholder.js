import React from 'react'
import ContentLoader from 'react-content-loader'

const MyBooksPlaceholder = () => {
    return (

        <ContentLoader>
            <rect x="20" y="20" rx="5" ry="5" width="64" height="63" />
            <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
            <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
            <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
        </ContentLoader>
    )
}
export default MyBooksPlaceholder