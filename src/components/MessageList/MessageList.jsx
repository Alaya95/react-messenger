import Message from '../Message/Message'
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export const MessageList = ({ messages }) => {
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ block: "end" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div>
            {messages.map((msg, index) => (
                <Message key={msg.id} author={msg.author} text={msg.text}  />
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.array
}