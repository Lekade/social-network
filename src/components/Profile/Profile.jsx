import React from 'react';
import s from './Profile.module.css'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>{
    return(

        <div className={s.profile}>
            <Profileinfo profileData={props.profileData} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;