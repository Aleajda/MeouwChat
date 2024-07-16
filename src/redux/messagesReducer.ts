const add_message = "ADD-MESSAGE";



export type DefaultStateType = {
    messagesData: {
        id: string,
        message: string
    }[],
    dialogsData: {
        id: string,
        name: string
    }[]
}


let defaultState:DefaultStateType = {
    messagesData: [
        { id: "1", message: "Hi i am a TIGER CAT" },
        { id: "2", message: "Hi i am a BROWN CAT" },
        { id: "3", message: "Hi i am a SMALL CAT" },
    ],
    dialogsData: [
        { id: "1", name: "TIGER CAT" },
        { id: "2", name: "BROWN CAT" },
        { id: "3", name: "SMALL CAT" },
    ]
}

const messagesReducer = (state = defaultState, action:any):DefaultStateType =>{
    let stateCopy = {...state};
    switch(action.type){  
        case add_message:
            let newMessage = {
                id: "0",
                message: action.text
                
            }
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            return stateCopy;

        default:
            return stateCopy; 
    }
}

export const addMessageActionCreator = (text: string) =>{
    return {type: add_message, text};
}

export default messagesReducer;