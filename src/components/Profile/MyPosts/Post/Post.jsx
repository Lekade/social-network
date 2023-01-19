import React from 'react';
import style from './Post.module.css'
import likeTrue from "./../../../../assecs/images/likeTrue.png"
import likeFalse from "./../../../../assecs/images/likeFalse.png"

const Post = (props) =>{
    return(
        <div className={style.post}>
            <img className={style.photo} src={props.photo} alt="photo"/>
            <div className={style.text}> { props.message } </div>
            <div className={style.likeElement} >
                {props.myLike
                    ? <button className={style.likeBtn} onClick={()=> props.removeLikePost(props.postId)}><img className={style.like} src={likeTrue}/>{props.likesCount}</button>
                    : <button className={style.likeBtn} onClick={()=>props.addLikePost(props.postId)}><img className={style.like} src={likeFalse}/>{props.likesCount}</button>}
            </div>
        </div>
    )
}

export default Post;