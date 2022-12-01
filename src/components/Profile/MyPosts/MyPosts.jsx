import React, {createRef} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const MyPosts = ({posts, addPost}) =>{

    let PostsElement = posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    );

    let onSubmit = (value) => {
        addPost(value.newPost)
    }

    return(
        <div className={style.MyPosts}>
            <h2 className={style.h2}>My posts</h2>
            <MyPostReduxForm onSubmit={onSubmit}/>
            {PostsElement}
        </div>
    )
}

const maxLength = maxLengthCreator(30);

const MyPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={"newPost"} component={Textarea}
                        validate={[required, maxLength]}/>
            </div>
            <div>
                <button className={style.button}>Send</button>
            </div>
        </form>
    )
}

let MyPostReduxForm = reduxForm({form:"myPost"})(MyPostForm)

export default MyPosts;