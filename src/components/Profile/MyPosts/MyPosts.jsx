import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer"

const MyPosts = (props) =>{



    let PostsElement = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreater(text));
    };

    return(
        <div className={s.MyPosts}>
            <h2 className={s.h2}>My posts</h2>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s.textarea} />
            <button onClick={ addPost } className={s.button}>Send</button>
            {PostsElement}
        </div>
    )
}

export default MyPosts;