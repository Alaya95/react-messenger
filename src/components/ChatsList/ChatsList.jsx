import PropTypes from 'prop-types';
import { Box, List } from '@mui/material';
import { Chat } from '../Chat/Chat';
import { NavLink, Outlet } from 'react-router-dom';
import './ChatList.styles.css';
import Form from '../Form/Form';

export const ChatsList = ({ chats, addChat, deleteChat }) => {
    const handleSubmit = (newChatName) => {
        const newChat = {
            id: `chat-${Date.now()}`,
            name: newChatName,
            family: newChatName
        };
        addChat(newChat)
    };
    return (
        <Box
            sx={{
                height: '90%',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
            }}>
            <List sx={{ gridColumn: '1 / 2', boxShadow: '-10px 0px 24px grey', }}>
                <Form onSubmit={handleSubmit} />
                {chats.map((chat) => (
                    <div key={chat.id}>
                        <NavLink className='chatlist-link' to={`/chat/${chat.id}`} >
                            <Chat
                                key={chat.id}
                                username={chat.name}
                                family={chat.family}
                            />
                        </NavLink>
                        <button className='chatlist-button' onClick={() => deleteChat(chat.id)} >
                            delete
                        </button>
                    </div>
                ))}
            </List >
            <Outlet />
        </Box>
    )
}

ChatsList.propTypes = {
    contacts: PropTypes.array
}