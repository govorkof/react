import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _callSubscriber() {
    console.log('state change')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer;     //Обсервер наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state)

  }
}

window.state = store;
export default store;
