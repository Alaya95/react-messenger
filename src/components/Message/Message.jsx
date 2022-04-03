import React from 'react';
import "./Message.styles.scss"
import PropTypes from 'prop-types';

export default function Message({ author, text }) {
    return (
        <div className={"message " + (author !== 'Robot' ? "message-to" : 'message-from')}>
            <span>{author}:</span>
            <p className='message-text'>{text}</p>
        </div>
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}