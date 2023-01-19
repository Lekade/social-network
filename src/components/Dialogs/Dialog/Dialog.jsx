import React from 'react';
import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import imageUser from "../../../assecs/images/user.png"

const Dialog = (props) => {

    const functionClik = () =>{
        props.setOpenMessages(true);
        props.setDialog(props.id);
    }

  return(
        <NavLink onClick={() => {functionClik()}} to={"/dialogs/" + props.id}  className={style.itom}>
            <div><img className={style.imageUser} src={imageUser} alt="imageUser"/></div>
            <div className={style.nickname}>{props.name}</div>
        </NavLink>
  );
}


export default Dialog;