import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTOS = "SET_PHOTO";
const EDIT_POST = "EDIT_POST";


export type DefaultStateType = {
    MyPostsData: {
        likes: string,
        message: string
    }[],
    profile: any,
    status: string
}



let defaultState:DefaultStateType = {
    MyPostsData: [
        { likes: "18", message: "MEU MEU MEU" },
        { likes: "6", message: "MEOW WORLD" },
        { likes: "15", message: "I MEOW YOU" }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = defaultState, action: any):DefaultStateType =>{
    let stateCopy = {...state};
    switch(action.type){
        case ADD_POST:
            stateCopy.MyPostsData = [...state.MyPostsData];
            let newPost = {
                message: action.text,
                likes: "0"
            }
            stateCopy.MyPostsData.push(newPost);
            return stateCopy;
        case EDIT_POST:
            return {
                ...stateCopy,
                MyPostsData: state.MyPostsData.map((post, index) => 
                    index === action.id ? { ...post, message: action.text } : post
                ) 
            }
        case DELETE_POST:
            return {...stateCopy, MyPostsData: action.newPostsData}  
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return stateCopy;
    }   
}


type addPostActionType = {
    type: typeof ADD_POST,
    text: string
}

type editPostActionType = {
    type: typeof EDIT_POST,
    text: string,
    id: number
}

type deletePostActionType = {
    type: typeof DELETE_POST,
    newPostsData: any
}

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: any
}

type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

type setPhotosActionType = {
    type: typeof SET_PHOTOS,
    photos: string
}

export const addPostActionCreator = (text: string):addPostActionType =>{
    return {type: ADD_POST, text};
}

export const deletePost = (newPostsData: any):deletePostActionType =>{
    return {type: DELETE_POST, newPostsData};
}

export const editPost = (text: string, id: number):editPostActionType =>{
    return {type: EDIT_POST, text, id};
}

export const setUserProfile = (profile: any):setUserProfileActionType =>{
    return {type: SET_USER_PROFILE, profile}
}

export const setStatus = (status: string):setStatusActionType =>{
    return {type: SET_STATUS, status}
}

const setPhoto = (photos: string):setPhotosActionType =>{
    return {type: SET_PHOTOS, photos}
}

export const setProfile = (userId: number) => async (dispatch: any) => {

    let response =  await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
};


export const getStatus = (userId: number) => async (dispatch: any) => {

    let response = await profileAPI.getStatus(userId)
    let status = response
    dispatch(setStatus(status));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
};

export const updatePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.updatePhoto(file)
    if (response.data.resultCode === 0){
        dispatch(setPhoto(response.data.data.photos));
    }
};

export const saveProfile = (profileData: any) => async (dispatch: any, getState: any) => {
    let id = getState().Auth.id;
    let response = await profileAPI.saveProfile(profileData)
    if (response.data.resultCode === 0){
        dispatch(setProfile(id))
        return true
    }
    else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "something wrong";
        dispatch(stopSubmit("profileData", {_error: message}));
        return false
    }
};

export default profileReducer;