import React from 'react'
import c from './Message.module.css'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={c.parent}>
            <img src={props.avatar} width={50} alt=""/>
            <div className={c.child}>
                <h1>{props.name}</h1>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>

        </div>
    )
}

export default Message
