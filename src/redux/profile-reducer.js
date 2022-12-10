import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts:[
        {id: 1, message:'Hi. how are you?', likesCount:1 },
        {id: 2, message:"It's my first post", likesCount:5 },
        {id: 3, message:'ok', likesCount:12 }
    ],
    newPostText:'it-camasutra.com',
    profileData: null,
    status: 'mi status'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let Post = {
                id:4, message: action.newPost, likesCount:0
            };
            return {
                ...state,
                posts: [...state.posts, Post]

            };
        case SET_USER_PROFILE:
            return {
                ...state, profileData: action.profileData
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
export const setUserProfile = (profileData) => ({type:SET_USER_PROFILE, profileData})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (profileId) => async(dispatch) => {
    const response = await profileAPI.getProfile(profileId);
    dispatch(setUserProfile(response.data));
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

export const saveProfileData = (profileFormData) => async(dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfileData(profileFormData);

    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    }else{
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("profile-data", {_error: messageError}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;