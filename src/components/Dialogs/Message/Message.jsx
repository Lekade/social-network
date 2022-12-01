import React from 'react';
import s from './Message.module.css'

const Message = (props) => {

    return (
        <div className={s.interlocutor}>
            <img src="" alt=""/>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
)
}

export default Message;