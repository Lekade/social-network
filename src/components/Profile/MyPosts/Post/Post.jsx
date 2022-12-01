import React from 'react';
import style from './Post.module.css'

const Post = (props) =>{
    return(
        <div className={style.post}>
            <img className={style.photo} src="https://static.tildacdn.com/tild3333-6532-4030-a539-383562626433/W-71.jpg" alt="photo"/>
            <div className={style.text}> { props.message } </div><div className={style.like}><img src="https://img.icons8.com/windows/32/ffffff/filled-heart.png"/> {props.likesCount}</div>
        </div>
    )
}

export default Post;