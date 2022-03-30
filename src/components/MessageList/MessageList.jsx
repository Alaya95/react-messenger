import Message from '../Message/Message'

export const MessageList = ({ messages }) => {
    return (
        messages.map((msg, index) => (
            <Message key={'message' + index} author={msg.author} text={msg.text} />
        ))
    )
}