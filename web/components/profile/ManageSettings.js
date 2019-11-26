import React, { useEffect } from 'react'
import { DarkPinkButton, LightPinkButton } from 'umqombothi-component-library'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_USERS_SETTINGS } from '../../graphql/Queries'
import { SHOW_EMAIL, SHOW_NUMBER, HIDE_EMAIL, HIDE_NUMBER } from '../../graphql/Mutations'

/*
  



                   


                  
                 
*/
const ManageSettings = ({ userId, name }) => {
    const { loading: queryLoading, error: queryError, data } = useQuery(GET_USERS_SETTINGS, { variables: { userID: userId } })
    const [showEmail, { loading: showEmailLoading, called }] = useMutation(SHOW_EMAIL, { variables: { showEmail: true, userID: userId } })



    return (
        <>
            manage my settings
            {showEmailLoading && <p>Busy </p>}
            {called && !showEmailLoading && <p>your settings have been updated</p>}
            <DarkPinkButton onClick={showEmail} text="Make my number visiable" isLoading={showEmailLoading} />
        </>
    )
}

export default ManageSettings