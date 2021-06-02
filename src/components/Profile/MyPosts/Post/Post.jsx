import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src="http://stalker-way.ru/newd/stalker.gif" />
                id {props.number}
                <br />
                post {props.message}.
                <br />
                likes {props.likesCount}
            </div>
        </div>
    )
}

export default Post