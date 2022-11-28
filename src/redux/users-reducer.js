import {userAPI} from "../api/api";

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
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return  {...u, followed:true}
                    }
                    return u;
                })
            }
        case   UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return  {...u, followed:false}
                    }
                    return u;
                })
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
                ...state, totalUserscount: action.quantityUsers - 21600
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

export const followSuccess = (userId) => ({type:FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type:UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setPageNumber = (pageNumber) => ({type:SET_PAGE_NUMBER, pageNumber})
export const setQuantityUsers = (quantityUsers) => ({type:SET_USER_COUNT, quantityUsers})
export const setTotalUserCount = (fetchingCount) => ({type:SET_TOTAL_USERS_COUNT, fetchingCount})
export const setExpectationFollowed = (expectation, userId) => ({type:EXPECTATION_FOLLOWED, expectation, userId})

export const getUsersTK = (currentPage, pageSize) => (dispatch) =>{
        dispatch(setPageNumber(currentPage))
        dispatch(setTotalUserCount(true))
    userAPI.getUsers(currentPage, pageSize).then( data => {
        dispatch(setTotalUserCount(false))
        dispatch(setUsers(data.items))
        dispatch(setQuantityUsers(data.totalCount))
    });
}

export const follow = (id) => (dispatch) => {
    dispatch(setExpectationFollowed(true, id))
    userAPI.follow(id).then(data =>
    {if(data.resultCode == 0){dispatch(followSuccess(id))}
        dispatch(setExpectationFollowed(false, id))
    })
}

export const unFollow = (id) => (dispatch) => {
    dispatch(setExpectationFollowed(true, id))
    userAPI.unFollow(id).then(data =>
    {if(data.resultCode == 0){dispatch(unfollowSuccess(id))}
        dispatch(setExpectationFollowed(false, id))
    })
}


export default usersReducer;