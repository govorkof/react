import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "../redux/profile-reducer";
import dialogReducer from "../redux/dialog-reducer";
import sidebarReducer from "../redux/sidebar-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({       //*REDUX смешивает наши три reducers которые делали мы раньше и засовывает в переменную reducers
    profilePage: profileReducer,       //есть сво-во profilePage за него отвечает profileReducer
    dialogsPage: dialogReducer,        //за dialogsPage отвечает dialogReducer
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,                  //для формы дожен называться именно form
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store = createStore(reducers, applyMiddleware(thunkMiddleware));     //*REDUX  отдаем закомбайненые редюсеры в store

window.__store__ = store;

export default store                   //зозвращаем измененный стор тому кто вызвал