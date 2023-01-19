import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addLikePost, addPost, removeLikePost} from "../../../redux/profile-reducer";
import {getPhotoSmall, getPosts} from "../../../redux/profile-selectors";

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    photo: getPhotoSmall(state)
})


const MyPostsContainer = connect(mapStateToProps, {addPost, addLikePost, removeLikePost})(MyPosts);

export default MyPostsContainer;