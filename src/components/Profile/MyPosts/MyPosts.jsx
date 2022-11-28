import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const MyPosts = (props) =>{

    let PostsElement = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    );

    let onSubmit = (value) => {
        console.log(value)
        props.addPost(value.newPost)
    }

    return(
        <div className={s.MyPosts}>
            <h2 className={s.h2}>My posts</h2>
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
                        validate={[required, maxLength]}
                />
            </div>
            <div>
                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

let MyPostReduxForm = reduxForm({form:"myPost"})(MyPostForm)

export default MyPosts;