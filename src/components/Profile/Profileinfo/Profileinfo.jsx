import React from 'react';
import style from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatusWithHooks";

const Profileinfo = ({profileData,  status, updateStatus, idOwner, savePhoto}) =>{

        let changePhoto = (e) => {
            if(e.target.files.length){
                 savePhoto(e.target.files[0])
            }
        }

        if(!profileData){
            return <Preloader/>
        }else{
          return  <div className={style.profileinfo}>
                <img className={style.profile_image} src="https://w-dog.ru/wallpapers/0/15/435643165576258/most-reka-zolotye-vorota-san-francisko.jpg" alt="image"/>
              {idOwner}
                <div className={style.content}>
                    <img className={style.photoUser} src={profileData.photos.large} alt="photo"/>
                    {idOwner && <input type={"file"} onChange={changePhoto}/>}
                    <div>{profileData.fullName}</div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
                <div className={style.textInfo}>
                    <div><span>About me</span><span>{profileData.aboutMe ? profileData.aboutMe : null}</span></div>
                    <div><b>Contacts</b></div>
                    <div><span>facebook : </span><span>{profileData.contacts.facebook ? profileData.contacts.facebook : null}</span></div>
                    <div><span>website : </span><span>{profileData.contacts.website ? profileData.contacts.website : null}</span></div>
                    <div><span>Vk : </span><span>{profileData.contacts.vk ? profileData.contacts.vk : null}</span></div>
                    <div><span>Twitter : </span><span>{profileData.contacts.twitter ? profileData.contacts.twitter : null}</span></div>
                    <div><span>Instagram : </span><span>{profileData.contacts.instagram ? profileData.contacts.instagram : null}</span></div>
                    <div><span>Youtub : </span><span>{profileData.contacts.youtube ? profileData.contacts.youtube : null}</span></div>
                    <div><span>Github : </span><span>{profileData.contacts.github ? profileData.contacts.github : null}</span></div>
                    <div><span>Main link : </span><span>{profileData.contacts.mainLink ? profileData.contacts.mainLink : null}</span></div>
                    <div><span>Looking for a job : </span><span>{profileData.contacts.lookingForAJobDescription ? profileData.contacts.lookingForAJobDescription : null}</span></div>
                </div>
            </div>
        }
}

export default Profileinfo;