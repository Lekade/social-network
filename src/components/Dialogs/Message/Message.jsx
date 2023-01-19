import React from 'react';
import style from './Message.module.css'

const Message = ({message}) => {

    return  <div>
                <p className={style.message}>
                    {message}
                </p>
            </div>
}

export default Message;