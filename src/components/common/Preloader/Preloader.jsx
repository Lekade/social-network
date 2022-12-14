import React from "react";
import loding from "../../../assecs/images/loading_1.webp";

const Preloader = (props) => {
    return <div>
        {props.isFetching === true ? <img alt="preloader" src={loding} /> : null }
    </div>
}

export default Preloader;