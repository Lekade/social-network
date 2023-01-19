import React, {useState} from 'react';
import style from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileData from "./ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm";

const Profileinfo = ({profileData,  status, updateStatus, idOwner, savePhoto, saveProfileData}) =>{

    let [editeMode, setEditeMode] = useState(false)


        let onSubmit = (profileFormData) => {
            saveProfileData(profileFormData).then( () => {
                    setEditeMode(false)
            })
        }

    if(!profileData){
        return <Preloader/>
    }else{
        return  <div className={style.profileinfo}>
            <div className={style.intro}></div>
            <div className={style.content}>
                <div>
                    {editeMode ? <ProfileDataReduxForm initialValues={profileData} profileData={profileData} onSubmit={onSubmit} savePhoto={savePhoto} setEditeMode={setEditeMode}/>
                    : <ProfileData profileData={profileData} editeMode={editeMode} status={status} updateStatus={updateStatus} idOwner={idOwner} setEditeMode={setEditeMode}/>}
                </div>
            </div>
        </div>
    }
}

export default Profileinfo;