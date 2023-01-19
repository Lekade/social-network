import style from "./Profileinfo.module.css";
import React from "react";
import ProfileStatus from "./ProfileStatusWithHooks";
import cn from "classnames"
import notPhoto from "../../../assecs/images/user.png";

const ProfileData = ({profileData, status, updateStatus, idOwner, setEditeMode}) => {
    return <div className={style.textInfo}>

            <div className={style.topInformation}>
                {profileData.photos.large
                    ? <img className={style.photoUser} src={profileData.photos.large} alt="userPhoto"/>
                    : <img className={style.photoUser} src={notPhoto} alt="notPhoto"/>
                }
                <div>{profileData.fullName}</div>
                {idOwner && <button onClick={() => setEditeMode(true)} className={style.btnElement}>EDIT PROFILE</button>}
            </div>
            {idOwner ? <ProfileStatus status={status} updateStatus={updateStatus}/> : <div className={cn(style.statusBlock, style.statusBlockDisabled)}><div className={style.status}>{status}</div></div>}
            <div className={style.bottomInformation}>
                <div>Looking for a job : {profileData.lookingForAJob ? "Yes" : "No"}</div>
                <div>Description : {profileData.lookingForAJobDescription}</div>
                <div>About me : {profileData.aboutMe}</div>

                <b>Contacts :</b>  {Object.keys(profileData.contacts).map(key => {
                return  <Contacts key={key} contactTitle={key} contactValue={profileData.contacts[key]}/>
                })}
            </div>
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div>{contactTitle} : {contactValue}</div>
}

export default ProfileData