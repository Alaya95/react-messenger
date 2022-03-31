import React from 'react';
import "./Message.styles.scss"
import PropTypes from 'prop-types';

export default function Message({ author, text }) {
    return (
        <div className={"message messageTo"}>
            <span>{author}:</span>
            <p>{text}</p>
        </div>
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}