import React from "react"
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import style from "./Login.module.css"
import lock from "../../assecs/images/lock.png"

const Login = ({authUser, onSubmit, captchaUrl}) => {

    return <div className={style.loginForm}>
        <div className={style.inputGrup}>
            <div className={style.lockImage}><img src={lock} alt="lock"/></div>
            <h1>LOGIN</h1>
            {authUser ? <Navigate to="/profile/" /> : <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />}
        </div>
    </div>
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
          <form onSubmit={handleSubmit}>
                {createField("Email", "email", Input, [required])}
                {createField("Password", "password", Input, [required], {type:"password"})}
                <label className={style.labelCheckbox}>{createField(null, "rememberMe", Input, [], {type:"checkbox"})} remember me</label>

                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField("Captcha", "captcha", Input, [required])}

              { error &&
                  <div className={style.commonError}>
                      {error}
                  </div>
              }
                <button className={style.submiteButton}>LOGIN</button>

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default Login;