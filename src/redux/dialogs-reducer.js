const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATA_NEW_MESSAGE_TEXT = 'UPDATA-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATA_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreater = () => ({type:ADD_MESSAGE})
export const updateNewMessageTextActionCreater = (text) => ({type:UPDATA_NEW_MESSAGE_TEXT, newText:text})


export default dialogReducer;