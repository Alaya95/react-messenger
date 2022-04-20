import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Chat } from './screens/Chat/Chat';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { PublicRoute } from './components/PublicRoute/PublicRoute';


function App() {
  const [authed, setAuthed] = useState(false);
  const handleLogin = () => {
    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
          Home page
        </NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
          Chat all
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inActive')}>
          Profile
        </NavLink>

        <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
          </Route>

          <Route path="/articles" element={<Articles />} />

          <Route path="/profile" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/chat" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={<ChatsList />}>
              <Route path=":id" element={<Chat />} />
            </Route>
          </Route>

          <Route path="*" element={<h4>404</h4>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
