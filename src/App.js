import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Chat } from './screens/Chat/Chat';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';
import { addChat, deleteChat } from './store/chats/actions';
import { addMessage, addMessageChat, deleteMessage } from './store/messages/actions';
import { selectorChats } from './store/chats/selectors';
import { selectorMessages } from './store/messages/selectors';

function App() {
  const dispatch = useDispatch();
  const messages = useSelector(selectorMessages, shallowEqual);
  const chats = useSelector(selectorChats, shallowEqual)

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    dispatch(addMessageChat(newChat.id));
  };
  const addNewMessage = (message, chatId) => {
    dispatch(addMessage( chatId, message ));
  };
  const removeChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(deleteMessage(id));
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
