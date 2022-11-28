import React from 'react';
import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const DialogsContainer = (props) => {

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessage)
    }

    return <Dialogs {...props}
                    addNewMessage={addNewMessage}
                    dialogsPage={props.dialogsPage}
    />
}

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect)(DialogsContainer);

