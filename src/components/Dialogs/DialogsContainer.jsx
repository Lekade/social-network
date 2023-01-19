import React from 'react';
import {sendMessage, setDialogId } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = (props) => {
    const addNewMessage = (value) => {
        props.sendMessage(value.newMessage);
        value.newMessage = "";
    }

    const setDialog = (id) =>{
        props.setDialogId(id)
    }

    return <Dialogs {...props}
                    addNewMessage={addNewMessage}
                    setDialog={ setDialog}
                    dialogsPage={props.dialogsPage}

    />
}

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

export default compose(
    connect(mapStateToProps, {sendMessage, setDialogId}),
    withAuthRedirect)(DialogsContainer);

