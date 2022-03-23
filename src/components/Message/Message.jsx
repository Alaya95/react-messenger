import React from 'react';
import "./Message.styles.scss"

export default function Message({ text, messageTo }) {
    return (
        <div className={"message" + (!messageTo ? " message-from" : " message-to")}>
            <p> {text}</p>
        </div>
    );
}