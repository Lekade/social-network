import React from 'react';
import s from './Profile.module.css'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>{
    return(
        <div className={s.profile}>
            <Profileinfo profileData={props.profileData}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         idOwner={props.idOwner}
                         savePhoto={props.savePhoto}
                         saveProfileData={props.saveProfileData}/>
            <MyPostsContainer
                         idOwner={props.idOwner}
            />
        </div>
    )
}

export default Profile;