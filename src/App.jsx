import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

const satu = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Header />
      {user ? (
        <div className="p-4">
          <h2 className="text-xl">Welcome, {user.username}!</h2>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 mt-4">
            Logout
          </button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};


function App() {


  return (
    <>
      
    </>
  )
};


export default App;