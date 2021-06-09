import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
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
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 9,
                // id: {state.posts.length} -1,
                message: action.newPostText,
                likesCount: 55
            }

            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
            };

            return stateCopy;
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

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
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
