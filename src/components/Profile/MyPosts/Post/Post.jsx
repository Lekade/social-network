import React from 'react';
import s from './Post.module.css'

const Post = (props) =>{
    return(
        <div className={s.post}>
            <img className={s.photo} src="https://static.tildacdn.com/tild3333-6532-4030-a539-383562626433/W-71.jpg" alt="photo"/>
            <div className={s.text}> { props.message } </div>
        </div>
    )
}

export default Post;