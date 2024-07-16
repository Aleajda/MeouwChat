import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CLEAR_USERS = "CLEAR_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_USERS_ARE_LOADING = "USERS_ARE_LOADING";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";
const SET_QUERY = "SET_QUERY";

let screenWidth = window.innerWidth;

let usersCount = 12;

if (screenWidth > 715 && screenWidth <= 899){
    usersCount = 16;
}
else if (screenWidth > 899){
    usersCount = 20;
}

export type DefaultStateType = {
    users: any[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isLoading: boolean,
    isFollowing: any[],
    query: string

}

let defaultState:DefaultStateType = {
    users: [],
    pageSize: usersCount,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    isFollowing: [],
    query: ""
}

const usersReducer = (state = defaultState, action: any):DefaultStateType =>{
    switch(action.type){
        case FOLLOW:
            return followUnfollowUser(state, action, true);
        case UNFOLLOW:
            return followUnfollowUser(state, action, false);
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case CLEAR_USERS:
            return {...state, users: []}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.PageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_USERS_ARE_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_FOLLOWING_IN_PROGRESS:
            return {...state,
                isFollowing: action.isFollowing
                ? [...state.isFollowing, action.userId]
                : state.isFollowing.filter(id => id != action.userId)}
        case SET_QUERY:
            return {...state, query: action.query}
        default:
            return state ;
        
    }
}   

const followUnfollowUser = (state: DefaultStateType, action: any, followed: boolean) => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return  {...u, followed} ;
            }
            return u;
        })
    }
};

type FollowACActionType = {
    type: typeof FOLLOW,
    userId: number
}

type UnfollowACActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

type setUsersActionType = {
    type: typeof SET_USERS,
    users: any
}

type clearUsersActionType = {
    type: typeof CLEAR_USERS
}

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    PageNumber: number
}

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}

type setUsersAreLoadingActionType = {
    type: typeof SET_USERS_ARE_LOADING,
    isLoading: boolean
}

type setFollowingInProgressActionType = {
    type: typeof SET_FOLLOWING_IN_PROGRESS,
    isFollowing: boolean,
    userId: number
}

export const FollowAC = (userId: number): FollowACActionType =>{
    return { type: FOLLOW, userId: userId};
}

export const UnfollowAC = (userId: number): UnfollowACActionType =>{
    return {type: UNFOLLOW, userId: userId};
}

export const setUsers = (users: any): setUsersActionType =>{
    return {type: SET_USERS, users};
}

export const clearUsers = (): clearUsersActionType =>{
    return {type: CLEAR_USERS};
}

export const setCurrentPage = (PageNumber: number): setCurrentPageActionType =>{
    return {type: SET_CURRENT_PAGE, PageNumber};
}

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType =>{
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export const setUsersAreLoading = (isLoading: boolean): setUsersAreLoadingActionType =>{
    return {type: SET_USERS_ARE_LOADING, isLoading}
}
export const setFollowingInProgress = (isFollowing: boolean, userId: number): setFollowingInProgressActionType =>{
    return {type: SET_FOLLOWING_IN_PROGRESS, isFollowing, userId}
}


export const getUsers = (page: number, pageSize: number, query: string = "") => async (dispatch: any) => {

    dispatch(setUsersAreLoading(true));

    let response = await usersAPI.getUsers(page, pageSize, query);

    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setUsersAreLoading(false)); 
};



const setFollowUnfollow = async (dispatch: any, userId: number, apiFunction: any, actionCreator: any) => {
    dispatch(setFollowingInProgress(true, userId));

    let response = await apiFunction(userId);

    dispatch(setFollowingInProgress(false, userId));
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
};

export const unfollow = (userId: number) => async (dispatch: any) => {
    setFollowUnfollow(dispatch, userId, usersAPI.deleteFollow, UnfollowAC);
};

export const follow = (userId: number) => async (dispatch: any) => {
    setFollowUnfollow(dispatch, userId, usersAPI.createFollow, FollowAC);
};

export const setQueryAC = (query: string) => {
    return({type: SET_QUERY, query})
}

export const setQuery = (query: string) => async (dispatch: any) => {
    dispatch(setQueryAC(query))
}



export default usersReducer;