import profileReducer, {addPost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

it("new post should be added", () =>{
    let action = addPost("din-din");
    let state = {
        posts:[
            {id: 1, message:'Hi. how are you?', likesCount:1 },
            {id: 2, message:"It's my first post", likesCount:5 },
            {id: 3, message:'ok', likesCount:12 }
        ]
    };
    let newPost = profileReducer(state, action);
    expect(newPost.posts.length).toBe(4);
})