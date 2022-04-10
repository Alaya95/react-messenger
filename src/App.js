import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Chat } from './screens/Chat/Chat';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';
import { useState } from 'react';
import { addChat, deleteChat } from './store/chats/actions';

/*
  1. Добавить редьюсеры + чатов и сообщений. 
    1.1 Сообщения хранить в объекте по ключу - id чата.
  2. Подключить соответствующие компоненты к стору. 
    2.2 Перенести сообщения и чаты из стейта в стор.
  3. Перенести (если есть) или добавить логику удаления и добавления чатов в редьюсер.
  4. Вынести селекторы в именованные функции, поместить их в соответствующие файлы (store/<reducerName>/selectors.js).
*/

const initialChats = [
  { id: 'chat1', name: 'aria', family: 'Inca' },
  { id: 'chat2', name: 'eli', family: 'Ban' },
  { id: 'chat3', name: 'Anna', family: 'Smith' },
  { id: 'chat4', name: 'Alex', family: 'Bran' },
];

const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

function App() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats);
  


  // const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);
  const addNewMessage = (message, id) => {
    
     setMessages({ ...messages, [id]: [...messages[id], message] });
  };
  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    // setChats((prevChats) => [...prevChats, newChat]);
    setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    // setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[id];
      return newMessages;
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
          Home page
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
          Chat all
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
          Profile
        </NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={<ChatsList chats={chats} deleteChat={removeChat} addChat={addNewChat} />}>
            <Route path=":id" element={<Chat messages={messages} addMessage={addNewMessage} />} />
          </Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<h4>404</h4>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
