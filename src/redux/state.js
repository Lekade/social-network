import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";


const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATA-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATA_NEW_MESSAGE_TEXT = 'UPDATA-NEW-MESSAGE-TEXT';

let store ={

    _state:  {

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vladislav'},
                {id: 2, name: 'Igor'},
                {id: 3, name: 'Marina'}
            ],
            messages:[
                {message: 'hi'},
                {message: 'How a you?'},
                {message: 'hi'},
                {message: 'Yo'}
            ],
            newMessageText:'Введите сообщение'
        },

        profilePage: {
            posts:[
                {id: 1, message:'Hi. how are you?', likesCount:1 },
                {id: 2, message:"It's my first post", likesCount:5 },
                {id: 3, message:'ok', likesCount:12 }
            ],
            newPostText:'it-camasutra.com'
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber ()  {
        console.log('state changed');
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }


}



export default store;
window.store = store;
