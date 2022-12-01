const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vladislav'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Marina'}
    ],
    messages:[
        {id: 1, message: 'hi'},
        {id: 2, message: 'How a you?'},
        {id: 3, message: 'hi'},
        {id: 4, message: 'Yo'}
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let body = action.newMessage
            return {
                ...state,
                  messages: [...state.messages,{id: 5, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({type:ADD_MESSAGE, newMessage})
export default dialogReducer;