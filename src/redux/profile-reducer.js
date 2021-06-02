import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It my first post', likesCount: 23 },
        { id: 3, message: 'It my two post', likesCount: 23 },
        { id: 4, message: 'It my three post', likesCount: 23 },
        { id: 5, message: 'It my four post', likesCount: 23 },
        { id: 6, message: 'It my five post', likesCount: 23 },
        { id: 7, message: 'It my six post', likesCount: 23 },
        { id: 8, message: 'It my seven post', likesCount: 23 },
    ],
    newPostText: "new",
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 9,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const apdateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const setStatus = (status) => ({ type: SET_STATUS, status })
export default profileReducer;
