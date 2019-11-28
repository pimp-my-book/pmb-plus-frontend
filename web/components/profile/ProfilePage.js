/*
This is the user's Profile page that will allow them to navigate 
to their books and chats

*/
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HeadingOne, HeadingTwo } from 'umqombothi-component-library'
import Avatar from '../../assets/Avatar_Shape.svg'
import Chat from '../../assets/chat_bubble.svg'
import Bookmark from '../../assets/collections_bookmark.svg'
import Amplify, { Auth, Storage } from 'aws-amplify'
import ManageSettings from './ManageSettings'
const ProfilePage = ({ }) => {
    //state for the users name + ID
    const [name, setName] = useState("")
    const [userId, setUserId] = useState("")
    // showEmail mutation

    useEffect(() => {

        //fetch the user's name from cognito #ED0677
        const usersName = Auth.currentSession()


            .then(data => {
                setUserId(data.idToken.payload.sub)
                setName(data.idToken.payload['custom:FullName'])
            })
            .catch(e => console.log(e))



    })


    //const [isLoading, setIsLoading] = useState(false)






    return (
        <>
            <div className="flex flex-col ml-32">
                <div className="flex flex-row p-20">
                    <HeadingOne text={`${name}`} className="mr-10" />
                    <img src={Avatar} alt="Avatar image" />

                </div>

                <div>
                    <ManageSettings userId={userId} name={name} />
                </div>

                <div className=" p-20">
                    <Link href='/books' to={'/books'}>
                        <div className="flex flex-row cursor-pointer">

                            <img src={Bookmark} alt="Avatar image" className="mr-10" />     <HeadingTwo text="My books" className="mr-10" />

                        </div>
                    </Link>
                    <div className="flex flex-row mt-10">
                        <img src={Chat} alt="Avatar image" className="mr-10" />     <HeadingTwo text="My chats" className="mr-10" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilePage