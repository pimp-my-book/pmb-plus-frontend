/*
This is the user's Profile page that will allow them to navigate 
to their books and chats

*/
import React from 'react'
import Link from 'next/link'
import { HeadingOne, HeadingTwo, HeadingFive, BodyText } from 'umqombothi-component-library'
import Avatar from '../../assets/Avatar_Shape.svg'
import Chat from '../../assets/chat_bubble.svg'
import Bookmark from '../../assets/collections_bookmark.svg'

const ProfilePage = ({ }) => {
    return (
        <>
            <div>
                <div className="flex flex-row p-20">
                    <HeadingOne text="User's name" className="mr-10" />
                    <img src={Avatar} alt="Avatar image" />

                </div>

                <div className=" p-20">
                    <div className="flex flex-row">
                        <Link href='/mybooks' to={'/mybooks'}>
                            <img src={Bookmark} alt="Avatar image" className="mr-10" />     <HeadingTwo text="My books" className="mr-10" />
                        </Link>
                    </div>
                    <div className="flex flex-row mt-10">
                        <img src={Chat} alt="Avatar image" className="mr-10" />     <HeadingTwo text="My chats" className="mr-10" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilePage