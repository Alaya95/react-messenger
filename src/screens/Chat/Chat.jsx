import { useEffect, useMemo, useState, } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithReply } from '../../store/messages/actions';
import { selectMessagesChatId } from '../../store/chats/selectors';

import { Box } from '@mui/material';


import { MessageList } from '../../components/MessageList/MessageList';
import Form from '../../components/Form/Form';
import { onValue, push } from 'firebase/database';
import { auth, getMsgsListRefById, getMsgsRefById } from '../../services/firebase';

export function Chat() {
    const { id } = useParams();

    const [messages, setMessages] = useState([]);

    const getMessages = useMemo(() => selectMessagesChatId(id), [id]);
    // const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const sendMessages = (text) => {
        push(getMsgsListRefById(id), {
            author: auth.currentUser.email,
            text,
            id: `msg-${Date.now()}`,
        });
        // dispatch(addMessageWithReply(id, {
        //     id: 'message-' + Date.now(),
        //     author: AUTHORS.human,
        //     text
        // })); 
    };

    useEffect(() => {
        const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
            const val = snapshot.val();
            if (!snapshot.val()?.exists) {
                setMessages(null);
            } else {
                console.log(val.messageList);
                setMessages(Object.values(val.messageList || {}));
            }
        });

        return unsubscribe;
    }, [id]);
    if (!messages) {
        return <Navigate to='/chat' replace />
    }

    return (
        <>
            <Box
                sx={{
                    height: '100%',
                    gridColumn: '2 / 5',
                    display: 'grid',
                    gridRow: '1',
                }}>
                <Box
                    sx={{
                        height: '5vh',
                        gridRow: '1 / 1',
                        gap: '1',
                    }}>
                    название чата
                </Box>
                <Box
                    sx={{
                        height: '75vh',
                        gridRow: '2 / 4',
                        overflow: ' scroll',
                        overflowX: 'hidden',
                        overflowY: 'auto',
                    }}>
                    <MessageList messages={messages} />
                </Box>
                <Box
                    sx={{
                        gridRow: '4 / 4',
                        gap: 1,
                    }}>
                    <Form onSubmit={sendMessages} />
                </Box>
            </Box>
        </>
    );
}