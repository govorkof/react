import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)    //для валидации! Внимательно смотреть примеры из FAQ REDUX-FORM. Если сразу вставлять вызов функции в validate то  
//------------------------------------------//будет ошибка бесконечного вызова setData

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea}  //когда компонента используется не стандартная, а какая либо созданная своя,
                    //-----------------------// то указывается в {}, а не в ковычках
                    name='newPostText'
                    placeholder='Enter post text'
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({ form: 'ProfileAddNewPstForm' })(AddNewPostForm)

const MyPosts = (props) => {
    console.log(props)

    let postsElements = props.posts.map(p => <Post
        message={p.message}
        likesCount={p.likesCount}
        number={p.id} />)
    let newPostElement = React.createRef();
    // let onAddPost = () => {
    //     props.addPost()
    // }
    const OnAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>
                    My posts
                </h3>
                <AddNewPostForm onSubmit={OnAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}





export default MyPosts