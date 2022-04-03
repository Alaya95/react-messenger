import PropTypes from 'prop-types';
import { Box, List } from '@mui/material';
import { Chat } from '../Chat/Chat';
import { NavLink, Outlet } from 'react-router-dom';
import './ChatList.styles.css';

const chats = [
    { id: 'chat1', name: 'aria', family: 'Inca' },
    { id: 'chat2', name: 'eli', family: 'Ban' },
    { id: 'chat3', name: 'Anna', family: 'Smith' },
    { id: 'chat4', name: 'Alex', family: 'Bran' },
];

export const ChatsList = () => {

    return (
        <Box
            sx={{
                height: '90%',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
            }}>
            <List sx={{ gridColumn: '1 / 2', boxShadow: '-10px 0px 24px grey', }}>
                {chats.map((chat) => (
                    <NavLink className='chatlist-link' to={`/chat/${chat.id}`} key={chat.id}>
                        <Chat
                            key={chat.id}
                            username={chat.name}
                            family={chat.family}
                        />
                    </NavLink>
                ))}
            </List >
            <Outlet />
        </Box>
    )
}

ChatsList.propTypes = {
    contacts: PropTypes.array
}