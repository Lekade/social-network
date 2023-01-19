import style from "./Profileinfo.module.css";
import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import cn from "classnames"
import iconPhoto from "../../../assecs/images/iconPhoto.png"

const ProfileDataForm = ({handleSubmit, profileData, error, savePhoto, setEditeMode}) => {

    let changePhoto = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return <div>
    <form className={style.infoSettings} onSubmit={handleSubmit}>
        <div>
            <img className={style.photoUser} src={profileData.photos.large} alt="userPhoto"/>
            <label className={style.fileInput}><input type={"file"} onChange={changePhoto}/><div><img src={iconPhoto} alt="iconPhoto"/></div></label>

            {createField("Full name", "fullName", Input, [])}
            <label><div className={style.lookingForAJob}>{createField("", "lookingForAJob", Input, [], {type: "checkbox"})} Looking for a job </div></label>
            {createField("Description", "lookingForAJobDescription", Textarea, [])}
            {createField("About me", "aboutMe", Textarea, [])}
        </div>
        <b>Contacts :</b>  {Object.keys(profileData.contacts).map(key => {
        return  <div key={key}>
            {createField(`Write your contacts on ${key}`, "contacts." + key, Input, [])}
        </div>
       })}

        { error &&
        <div className={style.commonError}>
            {error}
        </div>
        }

        <div ><button className={style.btnElement}>SUBMITE</button></div>
    </form>
        <button onClick={ () =>setEditeMode(false)} className={cn(style.btnElement, style.btnback) }>BACK</button>
    </div>
}

export const ProfileDataReduxForm = reduxForm({form: 'profile-data'})(ProfileDataForm)

