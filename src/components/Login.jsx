import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <>
    
  
    <div className="flex justify-center">
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="p-4">
      <div className="flex justify-center items-center mt-3">
        {/* Any content you want to place here */}
      </div>
      <div className="flex justify-center border-solid border-2 border-black p-2 rounded-xl m-2 mt-3 min-w-80">
        <figure>
          <img
            src="https://t4.ftcdn.net/jpg/00/20/65/89/360_F_20658993_XJ51UMeIUibhtCRPlgKh2v4L87aX3nBR.jpg"
            alt="Shoes"
            style={{ height: '100px' }}
          />
        </figure>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center"> 
        <input
          type="text"
          placeholder="spv"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="server"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <button class="btn btn-success">Login</button>
      </form>
    </div>
  </div>
</div>

      </>
      );
};

      export default Login;
