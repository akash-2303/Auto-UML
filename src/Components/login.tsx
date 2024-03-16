// Login.js

import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/blank-page');
  };
  return (
    <div>
      <div className="card">
        <h2>Login</h2>
        {/* <form onSubmit={handleLogin}> */}
        <form action="/blank-page" method="POST">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required /><br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />

          <input type="submit" value="Log In" />
        </form>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
