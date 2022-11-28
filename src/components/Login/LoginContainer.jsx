import React from "react"
import {connect} from "react-redux";
import {userLogin} from "../../redux/auth-reducer";
import {compose} from "redux";
import Login from "./Login";

const LoginContainer = (props) => {
    let onSubmit = (formData) => {
        props.userLogin(formData)
    }

    return <Login onSubmit={onSubmit} authUser={props.authUser}/>
}
let mapStateToProps = (state) => ({
    authUser:state.auth.authUser
})

export default compose(connect(mapStateToProps, {userLogin}))(LoginContainer);