import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) =>{



    let PostsElement = props.posts.map(
        p => <Post message={p.message}/>
    );

    return(
        <div className={s.MyPosts}>
            <h2 className={s.h2}>My posts</h2>
            <textarea className={s.textarea} ></textarea>
            <button className={s.button}>Send</button>
            {PostsElement}
        </div>
    )
}

export default MyPosts;