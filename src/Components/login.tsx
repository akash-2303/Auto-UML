// Login.js

import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate('/blank-page');
  // };
  //AB change start
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_id: username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      //navigating to blank page
      navigate('/blank-page');

    } catch (error) {
      setError('Login failed');
    }
      
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
