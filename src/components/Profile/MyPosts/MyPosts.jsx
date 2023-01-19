import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const MyPosts = ({posts, photo, addPost, idOwner, addLikePost, removeLikePost}) =>{

    let PostsElement = posts.map(
        p => <Post key={p.id} postId={p.id} message={p.message} likesCount={p.likesCount} myLike={p.myLike} photo={photo} addLikePost={addLikePost} removeLikePost={removeLikePost}/>
    );

    let onSubmit = (value) => {
        addPost(value.newPost);
        value.newPost = "";
    }

    return(
        <div className={style.myPosts}>
            <h2 className={style.h2}>My posts</h2>
            {idOwner ? <div><MyPostReduxForm onSubmit={onSubmit}/>{PostsElement}</div> : <div className={style.noPosts}>The user has no posts yet</div>}

        </div>
    )
}

const MyPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Anything new?"}  name={"newPost"} component={Textarea}
                        validate={[required]}/>
            </div>
            <div>
                <button className={style.btnElement}>Send</button>
            </div>
        </form>
    )
}

let MyPostReduxForm = reduxForm({form:"myPost"})(MyPostForm)

export default MyPosts;