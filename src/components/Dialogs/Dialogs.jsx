import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let DialogsElement = props.state.dialogs.map(
        n => <Dialog name={n.name} id={n.id}/>
    );

    let MessageElement = props.state.messages.map(
        m => <Message message={m.message}/>
    );

    return (
        <div className={s.dialogs}>
            <h2>DIALOGS</h2>

            <div className={s.all_chats}>
                {DialogsElement}
            </div>

            <div className={s.chat}>
                {MessageElement}
            </div>
        </div>
    );
}

export default Dialogs;