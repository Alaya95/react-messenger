import Message from '../Message/Message'
import PropTypes from 'prop-types';

export const MessageList = ({ messages }) => {
    return (
        messages.map((msg, index) => (
            <Message key={msg.id} author={msg.author} text={msg.text} />
        ))
    )
}

MessageList.propTypes = {
    messages: PropTypes.array
}