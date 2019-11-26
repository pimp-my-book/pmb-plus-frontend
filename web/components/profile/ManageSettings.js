import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { GET_USERS_SETTINGS } from '../../graphql/Queries'
import { SHOW_EMAIL, SHOW_NUMBER, HIDE_EMAIL, HIDE_NUMBER } from '../../graphql/Mutations'

/*
  const handleMutation = () => {
        showEmail({ variables: { showEmail: true, userID: userId } })

        //setIsLoading(true)
        //setIsLoading(false)
    }


        const [showEmail, { loading: showEmailLoading, called }] = useMutation(SHOW_EMAIL)


*/
const ManageSettings = ({ }) => {
    return (
        <>
            manage my settings
        </>
    )
}

export default ManageSettings