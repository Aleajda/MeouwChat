const SET_DARK = "SET_DARK";
const SET_WHITE = "SET_WHITE";

export type DefaultStateType = {
    dark: boolean
}

// Попытка получить значение из localStorage, если оно там есть
let storedDark = localStorage.getItem('dark');
let defaultState:DefaultStateType = {
    dark: storedDark ? JSON.parse(storedDark) : false
}

const settingsReducer = (state = defaultState, action: any):DefaultStateType =>{
    switch(action.type){
        case SET_DARK:
            localStorage.setItem('dark', JSON.stringify(true)); // Сохранение значения в localStorage
            return {...state, dark: true}
        case SET_WHITE:
            localStorage.setItem('dark', JSON.stringify(false)); // Сохранение значения в localStorage
            return {...state, dark: false}
        default:
            return state ;
        
    }
}

export const setDark = () => async (dispatch:any) => {
    dispatch({type: SET_DARK})
}

export const setWhite = () => async (dispatch:any) => {
    dispatch({type: SET_WHITE})
}

export default settingsReducer;