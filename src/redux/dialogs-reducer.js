const ADD_MESSAGE = 'network/dialogs/ADD-MESSAGE';
const SET_DIALOG_ID = 'network/dialogs/SET_DIALOG_ID';

let initialState = {
    dialogs: [
        {id: 0, name: 'Vladislav'},
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Tatiana'},
        {id: 5, name: 'Dima'}
    ],

    messages:{
        dialog_0: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How a you?'},
            {id: 3, message: 'My name is Denis'},
            {id: 4, message: 'Yo'}],
        dialog_1: [
            {id: 1, message: 'Yo'},
            {id: 2, message: 'My name is Denis'},
            {id: 3, message: 'And I understand your name is Igor'}],
        dialog_2: [
            {id: 1, message: 'Hellow!'},
            {id: 2, message: 'How a you?'}],
        dialog_3: [
            {id: 1, message: 'hellow, my name is Denis'},
            {id: 2, message: 'And I understand your name is Ksenia'}],
        dialog_4: [
            {id: 1, message: 'And I understand your name is Tatiana'},
            {id: 2, message: 'How a you?'}],
        dialog_5:  [
            {id: 1, message: 'Yo'},
            {id: 2, message: 'How a you?'}]

    },
    dialogId: 0
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let body = action.newMessage;
            let itom = "dialog_" + state.dialogId
            return {
                ...state,
                messages: {...state.messages, [itom] : [...state.messages[itom], {id:5, message:body}]}
            };
        case SET_DIALOG_ID:
            return {
                ...state,
                dialogId: action.dialogId
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({type:ADD_MESSAGE, newMessage})
export const setDialogId = (dialogId) => ({type:SET_DIALOG_ID, dialogId})
export default dialogReducer;