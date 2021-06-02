import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, apdateNewPostTextActionCreator } from "../../../redux/profile-reducer"
import store from '../../../redux/redux-store';
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = apdateNewPostTextActionCreator(text);
            dispatch(action)   
        },
        addPost: () => {
            store.dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer