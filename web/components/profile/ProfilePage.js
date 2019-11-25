/*
This is the user's Profile page that will allow them to navigate 
to their books and chats

*/
import React, { useState } from 'react'
import Link from 'next/link'
import Switch from 'react-switch'
import { HeadingOne, HeadingTwo, HeadingFive, BodyText } from 'umqombothi-component-library'
import Avatar from '../../assets/Avatar_Shape.svg'
import Chat from '../../assets/chat_bubble.svg'
import Bookmark from '../../assets/collections_bookmark.svg'
import Amplify, { Auth, Storage } from 'aws-amplify'


const ProfilePage = ({ }) => {

    //state for the users name
    const [name, setName] = useState("")

    //fetch the user's name from cognito #ED0677
    const usersName = Auth.currentSession()
        .then(data => setName(data.idToken.payload['custom:FullName']))
        .catch(e => console.log(e))


    return (
        <>
            <div className="flex flex-col ml-32">
                <div className="flex flex-row p-20">
                    <HeadingOne text={`${name}`} className="mr-10" />
                    <img src={Avatar} alt="Avatar image" />

                </div>

                <div>

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