import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/authenticate', { // Make sure the URL matches the backend route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_id: username, password }), // Use the correct keys as expected by the backend
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.Message || 'Login failed');
      }

      // If login is successful, navigate to the target page
      navigate('/blank-page');
    } catch (error) {
      setError(error.message || 'Login failed');
    }
  };

  return (
    <div>
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br /><br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br />

          <button type="submit">Log In</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
