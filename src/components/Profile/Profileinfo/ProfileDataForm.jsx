import style from "./Profileinfo.module.css";
import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";

const ProfileDataForm = ({handleSubmit, profileData, error}) => {

    return <form className={style.textInfo} onSubmit={handleSubmit}>
        <div>
            <div><button>Submite</button></div>
            <b>Full name : </b>{createField("Full name", "fullName", Input, [])}
            <b>Looking for a job :</b>{createField("Looking for a job", "lookingForAJob", Input, [], {type: "checkbox"})}
            <b>Description : </b>{createField("Description", "lookingForAJobDescription", Textarea, [])}
            <b>About me : </b>{createField("About me", "aboutMe", Textarea, [])}
        </div>
        <b>Contacts :</b>  {Object.keys(profileData.contacts).map(key => {
        return  <div key={key}>
            <b>{key}  : </b> {createField(key, "contacts." + key, Input, [])}
        </div>
       })}

        { error &&
        <div className={style.commonError}>
            {error}
        </div>
        }
    </form>
}


export const ProfileDataReduxForm = reduxForm({form: 'profile-data'})(ProfileDataForm)

