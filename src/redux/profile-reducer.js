const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATA-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:4, message: state.newPostText, likesCount:0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATA_NEW_POST_TEXT:
             state.newPostText = action.newText;
             return state;
        default:
             return state;
    }

}

export const addPostActionCreater = () => ({type:ADD_POST})
export const updateNewPostTextActionCreater = (text) => ({type:UPDATA_NEW_POST_TEXT, newText:text})

export default profileReducer;