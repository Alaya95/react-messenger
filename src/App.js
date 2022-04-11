import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Chat } from './screens/Chat/Chat';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
            <Route path="/chat" element={<ChatsList />}>
              <Route path=":id" element={<Chat />} />
            </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<h4>404</h4>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
