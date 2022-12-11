import axios from "axios";

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{'api-key':'98f6098b-b910-4444-a3a8-66303bd614e3'}
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return  instans.get(`users?page=${currentPage}&count=${pageSize}`).then( response => response.data);
    },
    follow (id){
        return instans.post(`follow/`+ id).then(response => response.data)
    },
    unFollow (id){
        return instans.delete(`follow/`+ id).then(response => response.data)
    }

}
export const profileAPI = {
    getProfile (profileId) {
        return instans.get(`profile/` + profileId )
    },
    getStatus (userId) {
        return instans.get(`profile/status/` + userId )
    },
    updateStatus (status) {
        return instans.put(`profile/status`, {status} )
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instans.put(`profile/photo`, formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        } )
    },
    saveProfileData (profileFormData) {
        return instans.put(`profile`, profileFormData )
    },
}

export const authAPI ={
    me () {
        return instans.get(`auth/me`).then(response => response.data)
    },
    loginMe (email, password, rememberMe, captcha) {
        debugger
        return instans.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout(){
        return instans.delete(`auth/login`).then(response => response.data)
    }
}

export const securityAPI ={
    getCaptchaUrl (){
        return instans.get(`security/get-captcha-url`)
    }
}