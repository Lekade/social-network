import React, {useState} from 'react';
import style from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatusWithHooks";
import ProfileData from "./ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm";

const Profileinfo = ({profileData,  status, updateStatus, idOwner, savePhoto, saveProfileData}) =>{

    let [editeMode, setEditeMode] = useState(false)

        let changePhoto = (e) => {
            if(e.target.files.length){
                 savePhoto(e.target.files[0])
            }
        }
        let onSubmit = (profileFormData) => {
            saveProfileData(profileFormData).then( () => {
                    setEditeMode(false)
            })
        }

    if(!profileData){
        return <Preloader/>
    }else{
        return  <div className={style.profileinfo}>
            <img className={style.profile_image} src="https://w-dog.ru/wallpapers/0/15/435643165576258/most-reka-zolotye-vorota-san-francisko.jpg" alt="image"/>
            {idOwner}
            <div className={style.content}>
                <div>
                    <img className={style.photoUser} src={profileData.photos.large} alt="photo"/>
                    {idOwner && <input type={"file"} onChange={changePhoto}/>}
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    {idOwner && <button onClick={() => setEditeMode(true)}>Edit profile</button>}
                    {editeMode ? <ProfileDataReduxForm initialValues={profileData} profileData={profileData} onSubmit={onSubmit}/> : <ProfileData profileData={profileData}/>}
                </div>
            </div>
        </div>
    }
}

export default Profileinfo;