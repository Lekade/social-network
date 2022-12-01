import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = ' UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
const SET_USER_COUNT = 'SET_USER_COUNT';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const EXPECTATION_FOLLOWED = 'EXPECTATION_FOLLOWED';


let initialState = {
    users:[ ],
    pageSize:5,
    totalUserscount: 0,
    currentPage:1,
    isFetching:false,
    expectationFollowedUsersId:[]

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case   FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:true})
                }
        case   UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:false})
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_PAGE_NUMBER:
            return {
                ...state, currentPage: action.pageNumber
            }
        case SET_USER_COUNT:
            return {
                ...state, totalUserscount: action.quantityUsers - 21770
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, isFetching: action.fetchingCount
            }
        case EXPECTATION_FOLLOWED:
            return {
                ...state,
                expectationFollowedUsersId:
                action.expectation ?
                [...state.expectationFollowedUsersId, action.userId]
                : state.expectationFollowedUsersId.filter(userId => userId != action.userId)
            }
        default:
             return state;
    }
}

const followedUser = async (id, apiMethod, actionCreater, dispatch) => {
    dispatch(setExpectationFollowed(true, id))
    const data = await apiMethod(id)
    if(data.resultCode == 0){dispatch(actionCreater(id))}
    dispatch(setExpectationFollowed(false, id))
}

export const followSuccess = (userId) => ({type:FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type:UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setPageNumber = (pageNumber) => ({type:SET_PAGE_NUMBER, pageNumber})
export const setQuantityUsers = (quantityUsers) => ({type:SET_USER_COUNT, quantityUsers})
export const setTotalUserCount = (fetchingCount) => ({type:SET_TOTAL_USERS_COUNT, fetchingCount})
export const setExpectationFollowed = (expectation, userId) => ({type:EXPECTATION_FOLLOWED, expectation, userId})

export const getUsersTK = (currentPage, pageSize) => async (dispatch) =>{
        dispatch(setPageNumber(currentPage))
        dispatch(setTotalUserCount(true))
        const data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setTotalUserCount(false))
        dispatch(setUsers(data.items))
        dispatch(setQuantityUsers(data.totalCount))
}

export const follow = (id) => (dispatch) => {
    followedUser(id, userAPI.follow.bind(userAPI), followSuccess, dispatch)
}

export const unFollow = (id) => (dispatch) => {
    followedUser(id, userAPI.unFollow.bind(userAPI), unfollowSuccess, dispatch)
}

export default usersReducer;