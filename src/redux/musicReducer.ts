import { musicApi } from "../api/api";


const SET_SONGS = "SET_SONGS"



let defaultState:any = {
    songs: [],
}

const musicReducer = (state = defaultState, action: any):any =>{
    let stateCopy = {...state};
    switch(action.type){
        case SET_SONGS:
            return {...stateCopy, songs: action.songs};
        default:
            return stateCopy;
    }   
}

export const setSongs = (songs:any) => {
    return({type: SET_SONGS, songs})
}

export const getSongs = (limit:any, query:any, genre:any) => async (dispatch: any) => {
    let response = await musicApi.getSongs(limit, query, genre)
    let songs = response.data.results
    dispatch(setSongs(songs));
}


export default musicReducer;