import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {authUser:state.auth.authUser}
}

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.authUser){return <Navigate to="/login"/>}
        return <Component {...props}/>
    }
    let connected = connect(mapStateToProps)(RedirectComponent);
    return connected
}

