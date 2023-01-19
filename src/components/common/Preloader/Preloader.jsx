import React from "react";
import loding from "../../../assecs/images/loading.gif";
import style from "./Preloader.module.css"


const Preloader = (props) => {
    return <div className={style.preloader}>
        {props.isFetching === true ? <img className={style.preloaderImg} alt="preloader" src={loding} /> : null }
    </div>
}

export default Preloader;