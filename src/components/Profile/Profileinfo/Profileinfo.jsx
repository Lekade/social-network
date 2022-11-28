import React from 'react';
import style from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatusWithHooks";


const Profileinfo = (props) =>{
        if(!props.profileData){
            return    <Preloader/>
        }else{
          return  <div className={style.profileinfo}>
                <img className={style.profile_image} src="https://w-dog.ru/wallpapers/0/15/435643165576258/most-reka-zolotye-vorota-san-francisko.jpg" alt="image"/>
                <div className={style.content}>
                    <img className={style.photoUser} src={props.profileData.photos.large} alt="photo"/>
                    <div>{props.profileData.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={style.textInfo}>
                    <div><span>About me</span><span>{props.profileData.aboutMe ? props.profileData.aboutMe : null}</span></div>
                    <div><b>Contacts</b></div>
                    <div><span>facebook : </span><span>{props.profileData.contacts.facebook ? props.profileData.contacts.facebook : null}</span></div>
                    <div><span>website : </span><span>{props.profileData.contacts.website ? props.profileData.contacts.website : null}</span></div>
                    <div><span>Vk : </span><span>{props.profileData.contacts.vk ? props.profileData.contacts.vk : null}</span></div>
                    <div><span>Twitter : </span><span>{props.profileData.contacts.twitter ? props.profileData.contacts.twitter : null}</span></div>
                    <div><span>Instagram : </span><span>{props.profileData.contacts.instagram ? props.profileData.contacts.instagram : null}</span></div>
                    <div><span>Youtub : </span><span>{props.profileData.contacts.youtube ? props.profileData.contacts.youtube : null}</span></div>
                    <div><span>Github : </span><span>{props.profileData.contacts.github ? props.profileData.contacts.github : null}</span></div>
                    <div><span>Main link : </span><span>{props.profileData.contacts.mainLink ? props.profileData.contacts.mainLink : null}</span></div>
                    <div><span>Looking for a job : </span><span>{props.profileData.contacts.lookingForAJobDescription ? props.profileData.contacts.lookingForAJobDescription : null}</span></div>
                </div>

            </div>
        }
}

export default Profileinfo;