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
import { DarkPinkButton, Alert, BodyText } from 'umqombothi-component-library'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_USERS_SETTINGS } from '../../graphql/Queries'
import { SHOW_EMAIL, SHOW_NUMBER, HIDE_EMAIL, HIDE_NUMBER } from '../../graphql/Mutations'


const ManageSettings = ({ userId, name }) => {
    const { loading: queryLoading, error: queryError, data } = useQuery(GET_USERS_SETTINGS, { variables: { userID: userId } })
    const [settingsID, setSettingsID] = useState("")

    const [showNumber, { loading: showNumberLoading, called, error: showErrorMutation }] = useMutation(SHOW_NUMBER, {
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


    const [hideNumber, { loading: hideNumberLoading, called: hideMutation, error: hideErrorMutation }] = useMutation(HIDE_NUMBER, {
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
            <div className="ml-20">

                {showNumberLoading && <Alert message="Making your number visiable." />}
                {called && !showNumberLoading && <Alert message="Your number is visable." />}
                {!showNumberLoading && called && showErrorMutation && <Alert error message="Can't show your number" />}

                {hideNumberLoading && <Alert message="Hiding your number" />}
                {!showNumberLoading && called && showErrorMutation && <Alert error message="Can't hide your number" />}
                {hideMutation && !hideNumberLoading && <Alert message="Your number is hidden." />}
                <div>
                    <BodyText text="You can easily change whether you want your phone number to be visible on your posts." />
                    <DarkPinkButton onClick={settings.showNumber === true ? hideNumber : showNumber} text={settings.showNumber === true ? 'Hide my number' : 'Show my number'} isLoading={showNumberLoading ? showNumberLoading : hideNumberLoading} />
                </div>

            </div>
        </>
    )
}

export default ManageSettings