import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { MessageList } from '../../components/MessageList/MessageList';
import Form from '../../components/Form/Form';
import { AUTHORS } from '../../components/utils/constants'
import { Navigate, useParams } from 'react-router-dom';
import { selectorMessages } from '../../store/messages/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/messages/actions';

export function Chat() {
    const { id } = useParams();
    const messages = useSelector(selectorMessages, shallowEqual);
    const dispatch = useDispatch();
    const timeout = useRef();
    const sendMessages = (text) => {
        dispatch(addMessage(id, {
            id: 'message-' + Date.now(),
            author: AUTHORS.human,
            text
        }));
    };

    useEffect(() => {
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.human) {
            timeout.current = setTimeout(() => {
                dispatch(
                    addMessage(id, {
                        author: AUTHORS.robot,
                        text: 'fdsfsd',
                        id: Date.now()
                    })
                );
            }, 1000);
        }
        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    if (!messages[id]) {
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
                    <MessageList messages={messages[id]} />
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