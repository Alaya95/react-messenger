import PropTypes from 'prop-types';
import { Box, List } from '@mui/material';
import { Chat } from '../Chat/Chat';
import { NavLink, Outlet } from 'react-router-dom';
import './ChatList.styles.css';
import Form from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { selectorChats } from '../../store/chats/selectors';
import { addMessageChat, deleteMessage } from '../../store/messages/actions';
import { addChat, deleteChat } from '../../store/chats/actions';
import {
    chatsRef,
    getChatRefById,
    getMsgsRefById,
} from "../../services/firebase";
import { useEffect, useState } from 'react';
import { onValue, remove, set } from 'firebase/database';

export const ChatsList = () => {
    const dispatch = useDispatch();

    const [chats, setChats] = useState([]);

    // const chats = useSelector(selectorChats, shallowEqual);

    const handleSubmit = (newChatName) => {
        const newChat = {
            id: `chat-${Date.now()}`,
            name: newChatName,
            family: newChatName
        };

        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), { exists: true });
        // dispatch(addChat(newChat));
        // dispatch(addMessageChat(newChat.id));
    };


    const handleRemoveChat = (id) => {
        remove(getChatRefById(id));
        set(getMsgsRefById(id), null);
        
        // dispatch(deleteChat(chatId));
        // dispatch(deleteMessage(chatId));
    }


    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            console.log(snapshot.val());
            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);

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