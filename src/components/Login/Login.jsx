import React from "react"
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {Navigate, NavLink} from "react-router-dom";
import style from "./Login.module.css"

const Login = (props) => {

    return <div>
        <h1>Login</h1>
        {props.authUser ? <Navigate to="/profile/26716"/> : <LoginReduxForm onSubmit={props.onSubmit} />}

    </div>
}

const LoginForm = (props) => {
    return (

          <form onSubmit={props.handleSubmit}>
                {createField("Email", "email", Input, [required])}
                {createField("Password", "password", Input, [required], {type:"password"})}
                {createField(null, "rememberMe", Input, [], {type:"checkbox"}, "remember me")}

              { props.error &&
                  <div className={style.commonError}>
                      {props.error}
                  </div>
              }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default Login;