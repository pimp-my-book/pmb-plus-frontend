/*
  This component allows us to manage the 
  users settings 

  Queries
  - GET_USERS_SETTINGS : retrives all the users preferences

  Mutations
  - SHOW_EMAIL - all the user to display their emails on posts
  - SHOW_NUMBER - allow user to display their number on posts
  - HIDE_EMAIL - allow the user to hide their email on posts
  - HIDE_NUMBER - allow the user to hide their number on posts


Caching
??


                  
                 
*/

import React, { useEffect, useState } from 'react'
import { DarkPinkButton, LightPinkButton } from 'umqombothi-component-library'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_USERS_SETTINGS } from '../../graphql/Queries'
import { SHOW_EMAIL, SHOW_NUMBER, HIDE_EMAIL, HIDE_NUMBER } from '../../graphql/Mutations'


const ManageSettings = ({ userId, name }) => {
    const { loading: queryLoading, error: queryError, data } = useQuery(GET_USERS_SETTINGS, { variables: { userID: userId } })
    const [settingsID, setSettingsID] = useState("")

    const [showNumber, { loading: showNumberLoading, called }] = useMutation(SHOW_NUMBER, {
        variables: { showNumber: true, userID: userId },
        update(cache, { data: { showNumber, ID } }) {
            const { getUsersSettings } = cache.readQuery({ query: GET_USERS_SETTINGS, variables: { userID: userId } });

            getUsersSettings.showNumber = showNumber
            cache.writeQuery({
                query: GET_USERS_SETTINGS,
                data: { getUsersSettings },
                variables: { showNumber: true, userID: userId }
            })

        },
        optimisticResponse: optimisticResponseShow

    })


    const [hideNumber, { loading: hideNumberLoading, called: hideMutation }] = useMutation(HIDE_NUMBER, {
        variables: { showNumber: false, userID: userId },
        update(cache, { data: { showNumber, ID } }) {
            const { getUsersSettings } = cache.readQuery({ query: GET_USERS_SETTINGS, variables: { userID: userId } });
            getUsersSettings.showNumber = showNumber

            cache.writeQuery({
                query: GET_USERS_SETTINGS,
                data: { getUsersSettings },
                variables: { showNumber: false, userID: userId }
            })

        },
        optimisticResponse: optimisticResponseHide


    })
    if (queryError) return <p>Error...</p>
    if (queryLoading) return <p>Loading...</p>

    const settings = data.getUsersSettings

    const optimisticResponseShow = {
        __typename: "Mutation",
        SHOW_NUMBER: {
            ID: settings.ID,
            __typename: "Settings",
            showNumber: showNumber
        }
    }

    const optimisticResponseHide = {
        __typename: "Mutation",
        HIDE_NUMBER: {
            ID: settings.ID,
            __typename: "Settings",
            showNumber: showNumber
        }
    }

    console.log(settings)

    return (
        <>
            manage my settings
            {showNumberLoading && <p>Busy making your number visiable </p>}
            {called && !showNumberLoading && <p>your number is now visable on all posts</p>}

            {hideNumberLoading && <p>Busy hiding your number</p>}
            {hideMutation && !hideNumberLoading && <p>Your number is now hidden from all posts</p>}
            <DarkPinkButton onClick={settings.showNumber === true ? hideNumber : showNumber} text={settings.showNumber === true ? 'Hide your number' : 'Show your number'} isLoading={showNumberLoading ? showNumberLoading : hideNumberLoading} />
        </>
    )
}

export default ManageSettings