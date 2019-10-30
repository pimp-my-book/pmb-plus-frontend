/*
This is the user's Profile page that will allow them to navigate 
to their books and chats

*/
import React from 'react'
import { HeadingOne, HeadingTwo, HeadingFive, BodyText } from 'umqombothi-component-library'
import Avatar from '../../assets/Avatar_Shape.svg'

const ProfilePage = ({ }) => {
    return (
        <>
            <div>
                <div class="flex flex-row p-20">
                    <HeadingOne text="User's name" className="mr-10" />
                    <img src={Avatar} alt="Avatar image" />

                </div>

            </div>
        </>
    )
}

export default ProfilePage