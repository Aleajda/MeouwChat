import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navigationReducer from "./navigtionReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";
import usersPostReducer from "./usersPostsReducer";
import settingsReducer from "./settingsReducer";
import musicReducer from "./musicReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    Navigation: navigationReducer,
    Users: usersReducer,
    Auth: authReducer,
    App: appReducer,
    Posts: usersPostReducer,
    Settings: settingsReducer,
    Music: musicReducer,
    form: formReducer
});

// для работы с redux-devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true, traceLimit:25}) || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

let store:any = createStore(reducers, applyMiddleware(thunkMiddleware));

window.Storage = store;
export default store;