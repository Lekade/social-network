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
        return instans.get(`profile/` + profileId ).then( response => response.data)
    },
    getStatus (userId) {
        return instans.get(`profile/status/` + userId ).then( response => response.data)
    },
    updateStatus (status) {
        return instans.put(`profile/status`, {status} ).then( response => response.data)
    }
}

export const authAPI ={
    me () {
        return instans.get(`auth/me`).then(response => response.data)
    },
    loginMe (email, password, rememberMe) {
        return instans.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout(){
        return instans.delete(`auth/login`).then(response => response.data)
    }
}