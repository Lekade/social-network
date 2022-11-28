import React, {useState} from 'react';
import style from './Profileinfo.module.css'


const ProfileStatus = (props) =>{

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    let enableEditMode = () => {
        setEditMode(true);
    }
    let disabledEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    let onChangeStatus = (e) => {
        setStatus(e.target.value)
    }


    return <div className={style.statusBlock}>
        <div>Status :</div>
        {!editMode && <div> <div className={style.status} onClick={enableEditMode}>{status || 'The status is missing'}</div></div>}
        {editMode && <div><input className={style.statusInput} autoFocus={true} value={status} onChange={onChangeStatus} onBlur={disabledEditMode} type="text"/></div>}
    </div>

}

export default ProfileStatus;