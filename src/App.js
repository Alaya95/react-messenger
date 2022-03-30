import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/MessageList/MessageList';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const sendMessages = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
    });
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout = setTimeout(() => {
        addMessage({ author: AUTHORS.robot, text: 'fdsfsd' });
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form onSubmit={sendMessages} />
    </div>
  );
}

export default App;
