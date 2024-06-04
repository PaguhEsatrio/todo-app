import React, { useState } from 'react';
import { authenticate } from '../database/login';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authenticate(password);
    if (user) {
      onLogin(user);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 m-2"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
    </form>
  );
};

export default Login;
