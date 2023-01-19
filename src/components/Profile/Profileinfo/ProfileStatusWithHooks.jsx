import React, {useEffect, useState} from 'react';
import style from './Profileinfo.module.css'


const ProfileStatus = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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


    return <div className={style.statusBlock}  onClick={enableEditMode}>
        {!editMode && <div className={style.status}>{status || 'The status is missing'}</div>}
        {editMode && <input className={style.statusInput} autoFocus={true} value={status} onChange={onChangeStatus} onBlur={disabledEditMode} type="text"/>}
    </div>

}

export default ProfileStatus;