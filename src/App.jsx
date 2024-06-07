import React, { useState } from 'react';
import Body from './components/Body';
import Login from './components/Login';
import { getauthenticate } from './database/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    const authenticatedUser = getauthenticate(username, password);
    if (authenticatedUser) {
      setIsLoggedIn(true);
      setUser(authenticatedUser);
    } else {
      alert('Username atau Password salah!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Body onLogout={handleLogout} user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
