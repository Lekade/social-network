import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
        default:
             return state;
    }

}

export const addPost = (newPost) => ({type:ADD_POST, newPost})
export const setUserProfile = (profileData) => ({type:SET_USER_PROFILE, profileData})
export const setStatus = (status) => ({type:SET_STATUS, status})

export const getUserProfile = (profileId) => async(dispatch) => {
    const data = await profileAPI.getProfile(profileId);
        dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async(dispatch) => {
    const data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
}

export const updateStatus = (status) => async(dispatch) => {
    const data = await profileAPI.updateStatus(status);
        if(data.resultCode === 0){
            dispatch(setStatus(status))
        }
}

export default profileReducer;