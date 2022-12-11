import React from "react"
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import style from "./Login.module.css"

const Login = ({authUser, onSubmit, captchaUrl}) => {

    return <div>
        <h1>Login</h1>
        {authUser ? <Navigate to="/profile/" /> : <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />}

    </div>
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
          <form onSubmit={handleSubmit}>
                {createField("Email", "email", Input, [required])}
                {createField("Password", "password", Input, [required], {type:"password"})}
                {createField(null, "rememberMe", Input, [], {type:"checkbox"}, "remember me")}

                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField("Captcha", "captcha", Input, [required])}

              { error &&
                  <div className={style.commonError}>
                      {error}
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