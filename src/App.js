import Message from './components/Message/Message';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    if (messages.length && messages[messages.length - 1]['author'] === 'name') {
      addMessage({ author: 'robot', text: 'fdsfsd' });
    }
  }, [messages]);

  return (
    <div className="App">
      {messages.map((msg, index) => (
        <Message key={'message' + index} author={msg.author} text={msg.text} />
      ))}

      <Form onSubmit={addMessage} />
    </div>
  );
}

export default App;
