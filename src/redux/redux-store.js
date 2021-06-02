import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "../redux/profile-reducer";
import dialogReducer from "../redux/dialog-reducer";
import sidebarReducer from "../redux/sidebar-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from  'redux-thunk'

let reducers = combineReducers({       //*REDUX смешивает наши три reducers которые делали мы раньше и засовывает в переменную reducers
    profilePage: profileReducer,       //есть сво-во profilePage за него отвечает profileReducer
    dialogsPage: dialogReducer,        //за dialogsPage отвечает dialogReducer
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));     //*REDUX  отдаем закомбайненые редюсеры в store

window.store = store;

export default store                   //зозвращаем измененный стор тому кто вызвал