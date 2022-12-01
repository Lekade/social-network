import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {createField, Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = ({dialogsPage, ...props}) => {
    let DialogsElement = dialogsPage.dialogs.map(
        n => <Dialog name={n.name} key={n.id} id={n.id}/>
    );

    let MessageElement = dialogsPage.messages.map(
        m => <Message message={m.message} key={m.id} />
    );

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>

            <div className={s.all_chats}>
                {DialogsElement}
            </div>

            <div className={s.chat}>
                {MessageElement}
                <DialogReduxForm onSubmit={props.addNewMessage}/>
            </div>
        </div>
    );
}

const maxLength = maxLengthCreator(30);

const DialogForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            {createField("Message", "newMessage", Textarea, [required, maxLength])}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: "messages"})(DialogForm)

export default Dialogs;