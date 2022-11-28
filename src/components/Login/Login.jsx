import React from "react"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
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
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={"input"}
                       name={"rememberMe"}
                       type={"checkbox"}
                /> remember me
            </div>

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