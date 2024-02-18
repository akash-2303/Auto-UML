// Login.js

import React from 'react';

const Login = () => {
  return (
    <div id="root">
      <div className="card">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required /><br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />

          <input type="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
