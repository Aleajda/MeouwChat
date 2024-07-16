import { usersPostsApi } from "../api/api";

const SET_POSTS = "SET_POSTS"
const DELETE_POSTS = "DELETE_POSTS"
const SET_POSTS_WITH_QUERY = "SET_POSTS_WITH_QUERY"
const DELETE_POSTS_W_QUERY = "DELETE_POSTS_W_QUERY"
const SET_END_SKIP = "SET_END_SKIP"



let defaultState:any = {
    posts: [],
    postsWquery: [],
    endSkip: 100000
}

const usersPostReducer = (state = defaultState, action: any):any =>{
    let stateCopy = {...state};
    switch(action.type){
        case SET_POSTS:
            return {...stateCopy, posts: [...stateCopy.posts, ...action.posts.posts]};
        case SET_POSTS_WITH_QUERY:
            return {...stateCopy, postsWquery: [...stateCopy.postsWquery, ...action.posts.posts]};
        case DELETE_POSTS:
            return {...stateCopy, posts: []}
        case DELETE_POSTS_W_QUERY:
            return {...stateCopy, postsWquery: []}
        case SET_END_SKIP:
            return {...stateCopy, endSkip: action.endSkip}
        default:
            return stateCopy;
    }   
}

export const setPosts = (posts:any) => {
    return({type: SET_POSTS, posts})
}

export const getPosts = (limit:any, skip:any) => async (dispatch: any) => {
    let response = await usersPostsApi.getPosts(limit, skip)
    let posts = response.data
    console.log(posts)
    dispatch(setPosts(posts));
    dispatch(setEndSkip(posts.total))
}

export const setPostsWithQuery = (posts:any) => {
    return({type: SET_POSTS_WITH_QUERY, posts})
}

export const getPostsWithQuery = (query:any, limit:any, skip:any) => async (dispatch: any) => {
    let response = await usersPostsApi.getPostsWithQuery(query, limit, skip)
    let posts = response.data
    dispatch(setPostsWithQuery(posts));
    dispatch(setEndSkip(posts.total))
}

export const deletePosts = () => async (dispatch: any) => {
    dispatch({type: DELETE_POSTS})
}

export const deletePostsWquery = () => async (dispatch: any) => {
    dispatch({type: DELETE_POSTS_W_QUERY})
}

export const setEndSkip = (endSkip: number) => {
    return({type: SET_END_SKIP, endSkip})
}

export default usersPostReducer;