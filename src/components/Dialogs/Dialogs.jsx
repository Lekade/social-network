import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogsElement = state.dialogs.map(
        n => <Dialog name={n.name} key={n.id} id={n.id}/>
    );

    let MessageElement = state.messages.map(
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
            <div>
                <Field component={Textarea}
                       name={"newMessage"}
                       placeholder={"Message"}
                       validate={[required, maxLength]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: "messages"})(DialogForm)

export default Dialogs;