import style from "./Profileinfo.module.css";
import React from "react";

const ProfileData = ({profileData}) => {
    return <div className={style.textInfo}>
        <div>
            <div>{profileData.fullName}</div>
            <div>Looking for a job : {profileData.lookingForAJob ? "Yes" : "No"}</div>
            <div>Description : {profileData.lookingForAJobDescription}</div>
            <div>About me : {profileData.aboutMe}</div>
        </div>
        <b>Contacts :</b>  {Object.keys(profileData.contacts).map(key => {
        return  <Contacts key={key} contactTitle={key} contactValue={profileData.contacts[key]}/>
    })}
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileData