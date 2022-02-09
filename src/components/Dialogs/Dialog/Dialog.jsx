import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
  return(

        <NavLink to={"/dialogs/" + props.id}  className={s.itom}>
            <div className={s.indicator}></div>
            <div className={s.nickname}>{props.name}</div>
        </NavLink>
  );
}


export default Dialog;