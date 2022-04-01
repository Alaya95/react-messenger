import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { Chat } from '../Chat/Chat';
export const ChatsList = ({ chats }) => {

    return (
        <List xs={3} variant="outlined">
            {chats.map((chat) => (
                <Chat
                    key={chat.id}
                    username={chat.name}
                    family={chat.family}
                />
            ))}
        </List >
    )

}

ChatsList.propTypes = {
    contacts: PropTypes.array
}