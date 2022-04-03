import { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { ChatsList } from '../../components/ChatsList/ChatsList';
import { MessageList } from '../../components/MessageList/MessageList';
import Form from '../../components/Form/Form';
import { AUTHORS, CHATLIST } from '../../components/utils/constants'

export function Chat() {
    const [messages, setMessages] = useState([]);
    const timeout = useRef();
    const addMessage = (message) => {
        setMessages([...messages, message]);
    };
    const sendMessages = (text) => {
        addMessage({
            id: Date.now(),
            author: AUTHORS.human,
            text,
        });
    };

    useEffect(() => {
        if (messages[messages.length - 1]?.author === AUTHORS.human) {
            timeout.current = setTimeout(() => {
                addMessage({ author: AUTHORS.robot, text: 'fdsfsd', id: Date.now() });
            }, 1000);
        }
        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    return (
        <div className="App">
            <Box sx={{height: '10%' }} >
                главная
                чат
                профиль
            </Box>


            <Box
                sx={{
                    height: '90%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 1,
                }}>
                <Box
                    sx={{
                        gridColumn: '1 / 2',
                        boxShadow: '-10px 0px 24px grey',
                    }}>
                    <ChatsList chats={CHATLIST} />
                </Box>

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
                        Название чата
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
            </Box>
        </div>
    );
}