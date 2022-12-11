import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_AUTH = 'network/auth/SET_USER_AUTH';
const SET_CAPTHA_SUCCESS = 'network/auth/SET_CAPTHA_SUCCESS';

let initialState = {
    id: null,
    email:null,
    login: null,
    authUser: false,
    captchaUrl: null

};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
        case SET_CAPTHA_SUCCESS:
            return {
                ...state,
                ...action.authData
            }
        default:
             return state;
    }

}
export const setAuthUserData = (id, email, login, authUser) => ({type:SET_USER_AUTH, authData: {id, email, login, authUser}})
export const setCaptchaSuccess = (captchaUrl) => ({type:SET_CAPTHA_SUCCESS, authData:{captchaUrl}})
export const getAuthUserData = () => async(dispatch) => {
    const data = await authAPI.me()
        let {id, email, login} = data.data;
        if(data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login, true))
        }
}

export const userLogin = (formData) => async(dispatch) => {
    let {email, password, rememberMe = false, captcha = null} = formData;
    debugger
    const data = await authAPI.loginMe(email, password, rememberMe, captcha)
        if(data.resultCode === 0){
            dispatch(getAuthUserData());
        }else {
            if(data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let messageError = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: messageError}));
        }
}

export const logout = () => async(dispatch) =>{
    const data = await authAPI.logout()
     if(data.resultCode === 0){
         dispatch(setAuthUserData(null, null, null, false))
     }
}

export const getCaptchaUrl = () => async(dispatch) =>{
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaSuccess(captchaUrl))
}

export default authReducer;