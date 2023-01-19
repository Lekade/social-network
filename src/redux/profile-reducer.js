import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {updateObjectInArray} from "../utils/object-helpers";

const ADD_POST = 'network/profile/ADD-POST';
const ADD_LIKE_POST = 'network/profile/ADD_LIKE_POST';
const REMOVE_LIKE_POST = 'network/profile/REMOVE_LIKE_POST';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_STATUS = 'network/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'network/profile/SAVE_PHOTO_SUCCESS';
const SET_MY_PROFILE = 'network/profile/SET_MY_PROFILE';

let initialState = {
    posts:[
        {id: 1, message:'Hi. how are you?', likesCount:1, myLike:false },
        {id: 2, message:"It's my first post", likesCount:5, myLike:false },
        {id: 3, message:'ok', likesCount:12, myLike:false }
    ],
    newPostText:'it-camasutra.com',
    profileData: null,
    myProfileData:null,
    status: 'mi status'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newId = state.posts[state.posts.length - 1].id + 1
            let Post = {
                id:newId, message: action.newPost, likesCount:0, myLike:false
            };
            return {
                ...state,
                posts: [...state.posts, Post]

            };
        case ADD_LIKE_POST:
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.postId, "id", {likesCount:state.posts[action.postId - 1].likesCount + 1, myLike:true})
            };
        case REMOVE_LIKE_POST:
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.postId, "id", {likesCount:state.posts[action.postId - 1].likesCount - 1, myLike:false})
            }
        case SET_USER_PROFILE:
            return {
                ...state, profileData: action.profileData
            };
        case SET_MY_PROFILE:
            return {
                ...state, myProfileData: action.myProfileData
            };
        case SET_STATUS:
            return {
                ...state, status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profileData:{...state.profileData, photos: action.photos}
            };
        default:
             return state;
    }

}

export const addPost = (newPost) => ({type:ADD_POST, newPost})
export const addLikePost =(postId) => ({type:ADD_LIKE_POST, postId})
export const removeLikePost =(postId) => ({type:REMOVE_LIKE_POST, postId})
export const setUserProfile = (profileData) => ({type:SET_USER_PROFILE, profileData})
export const setMyProfile = (myProfileData) => ({type:SET_MY_PROFILE, myProfileData})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (profileId) => async(dispatch, getState) => {
    const response = await profileAPI.getProfile(profileId);
    dispatch(setUserProfile(response.data));
    if(profileId === getState().auth.id){
        dispatch(setMyProfile(response.data))
    }
}

export const getStatus = (userId) => async(dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async(dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async(dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export const getMyProfileData = () => async(dispatch, getState) => {
    const myId = getState().auth.id;
    dispatch(getUserProfile(myId));
}

export const saveProfileData = (profileFormData) => async(dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfileData(profileFormData);

    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    }else{
        const messageError = response.data.messages[0];
        const inputName = messageError.slice(messageError.indexOf(">") + 1, messageError.indexOf(")"))
        const inputNameValid = inputName[0].toLowerCase() + inputName.substring(1)
        dispatch(stopSubmit("profile-data", {"contacts": {[inputNameValid]: messageError}}));
        return Promise.reject(messageError);
    }
}

export default profileReducer;