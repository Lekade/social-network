import React, {useState} from 'react';
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Textarea} from "../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import imageUser from "../../assecs/images/user.png"


const Dialogs = ({dialogsPage, ...props}) => {

    const [openMessages, setOpenMessages] = useState(false);
    const itom = "dialog_" + [dialogsPage.dialogId]

    let DialogsElement = dialogsPage.dialogs.map(
        n => <Dialog name={n.name} key={n.id} id={n.id} dialogsPage={dialogsPage} setOpenMessages={setOpenMessages}  setDialog={props.setDialog}/>
    );
    let MessageElement = dialogsPage.messages[itom].map(
        m => <Message message={m.message} key={m.id} />
    );

    return (
        <div className={style.dialogs}>


            {openMessages
                ? <div className={style.chat}>

                    <div className={style.headerChat}>
                        <button onClick={ () => setOpenMessages(false)} className={style.buttonBack}>Back</button>
                        <div>{ dialogsPage.dialogs[dialogsPage.dialogId].name}</div>
                        <img src={imageUser} alt="imageUser"/>
                    </div>
                    <div className={style.messageBlock}>
                        <div className={style.messagesElements}>
                            {MessageElement}
                        </div>
                        <DialogReduxForm onSubmit={props.addNewMessage} />
                    </div>
                </div>
                : <div className={style.allChats}>
                    <h2>DIALOGS</h2>
                {DialogsElement}
                </div>}
        </div>
    );
}

const maxLength = maxLengthCreator(500);

const DialogForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            {createField("Message", "newMessage", Textarea, [required, maxLength])}
            <div>
                <button className={style.btnElement}>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: "messages"})(DialogForm)

export default Dialogs;