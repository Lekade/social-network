export const getPhotoSmall = (state) => {
    const myProfileData =  state.profilePage.myProfileData
    if(myProfileData !== null){
        return myProfileData.photos.small
    }
}

export const getPosts = (state) => {
    return state.profilePage.posts
}

export const getProfileData = (state) => {
    return state.profilePage.profileData
}

export const getstatus = (state) => {
    return state.profilePage.status
}

export const getId = (state) => {
    return state.auth.id
}