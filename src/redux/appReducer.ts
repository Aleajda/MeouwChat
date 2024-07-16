import { setAuthUser } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";


export type DefaultStateType = {
    initialized: boolean
}

let defaultState:DefaultStateType = {
    initialized: false
}

const appReducer = (state = defaultState, action: any):DefaultStateType =>{
    switch(action.type){
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state ;
        
    }
}

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = ():initializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch: any) =>{
    let promise = dispatch(setAuthUser());
    await Promise.all([promise]);
    dispatch(initializedSuccess());
}

export default appReducer;