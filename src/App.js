import Form from './components/Form/Form';
import { ChatsList } from './components/ChatsList/ChatsList';
import { useState, useRef, useEffect } from 'react';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/MessageList/MessageList';
import './App.css';
import { Container, Grid } from '@mui/material';

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2} sm={4} md={4}>
          <ChatsList chats={chats} />
        </Grid>
        <Grid item xs={2} sm={8} md={4}>
          <MessageList messages={messages} />
          <Form onSubmit={sendMessages} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
