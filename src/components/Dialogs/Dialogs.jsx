import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogs-reducer"


const Dialogs = (props) => {



    let DialogsElement = props.dialogsPage.dialogs.map(
        n => <Dialog name={n.name} id={n.id}/>
    );

    let MessageElement = props.dialogsPage.messages.map(
        m => <Message message={m.message}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreater());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreater(text));
        }


    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>

            <div className={s.all_chats}>
                {DialogsElement}
            </div>

            <div className={s.chat}>
                {MessageElement}
                <div className={s.dataEentry}>
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;