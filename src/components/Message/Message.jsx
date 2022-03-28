import React from 'react';
import "./Message.styles.scss"

export default function Message({ author, text }) {
    return (
        <div className={"message messageTo"}>
            <span>{author}:</span>
            <p>{text}</p>
        </div>
    );
}