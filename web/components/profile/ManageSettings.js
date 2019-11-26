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

                    <DarkPinkButton onClick={handleMutation()} text="Make my number visiable" isLoading={showEmailLoading} />


                     {showEmailLoading && <p>Busy </p>}
                    {called && <p>your settings have been updated</p>}
                 
*/
const ManageSettings = ({ userId, name }) => {
    return (
        <>
            manage my settings {userId} {name}
        </>
    )
}

export default ManageSettings