import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = 'SET_USER_AUTH';


let initialState = {
    id: null,
    email:null,
    login: null,
    authUser: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case   SET_USER_AUTH:
            return {
                ...state,
                ...action.authData
            }
        default:
             return state;
    }

}

export const setAuthUserData = (id, email, login, authUser) => ({type:SET_USER_AUTH, authData: {id, email, login, authUser}})
export const getAuthUserData = () => (dispatch) => {
    return  authAPI.me().then( data => {
        let {id, email, login} = data.data;
        if(data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login, true))
        }
    });
}
export const userLogin = (formData) => (dispatch) => {

    let {email, password, rememberMe} = formData
    authAPI.loginMe(email, password, rememberMe).then( data => {
        if(data.resultCode === 0){
            dispatch(getAuthUserData());
        }else {
            let messageError = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: messageError}));
        }
    });
}
export const logout = () => (dispatch) =>{
     authAPI.logout().then(data =>{
     if(data.resultCode === 0){
         dispatch(setAuthUserData(null, null, null, false))
     }
 });
}

export default authReducer;