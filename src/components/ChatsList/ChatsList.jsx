import PropTypes from 'prop-types';
import { Box, List } from '@mui/material';
import { Chat } from '../Chat/Chat';
import { NavLink, Outlet } from 'react-router-dom';
import './ChatList.styles.css';
import Form from '../Form/Form';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectorChats } from '../../store/chats/selectors';
import { addMessageChat, deleteMessage } from '../../store/messages/actions';
import { addChat, deleteChat } from '../../store/chats/actions';

export const ChatsList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectorChats, shallowEqual);
    const handleSubmit = (newChatName) => {
        const newChat = {
            id: `chat-${Date.now()}`,
            name: newChatName,
            family: newChatName
        };
        dispatch(addChat(newChat));
        dispatch(addMessageChat(newChat.id));
    };

    const handleRemoveChat = (chatId) => {
        dispatch(deleteChat(chatId));
        dispatch(deleteMessage(chatId));
    }

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
                        <button className='chatlist-button' onClick={() => handleRemoveChat(chat.id)} >
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