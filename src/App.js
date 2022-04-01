import Form from './components/Form/Form';
import { ChatsList } from './components/ChatsList/ChatsList';
import { useState, useRef, useEffect } from 'react';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/MessageList/MessageList';
import './App.css';
import { Box } from '@mui/material';

const chats = [
  { id: 1, name: 'aria', family: 'Inca' },
  { id: 2, name: 'eli', family: 'Ban' },
  { id: 3, name: 'Anna', family: 'Smith' },
  { id: 4, name: 'Alex', family: 'Bran' },
];

function App() {
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
      <Box 
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
        }}>
        <Box
          sx={{
            gridColumn: '1 / 2',
            boxShadow: '-10px 0px 24px grey',
          }}>
          <ChatsList chats={chats} />
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
              height: '85vh',
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

export default App;
