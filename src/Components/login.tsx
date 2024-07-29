import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/authenticate', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_id: username, password }), 
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.Message || 'Login failed');
      }

      // If login is successful, navigate to the target page
      navigate('/blank-page');
    } catch (error) {
      // First, ensure 'error' is an instance of Error.
      if (error instanceof Error) {
        setError(error.message || 'Login failed');
      } else {
        // If it's not an Error instance, handle it as a generic error.
        setError('An unexpected error occurred');
      }
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
        <button onClick={() => navigate('/signup')} className="link-button">Don't have an account? Sign up</button>
      </div>
    </div>
  );
};

export default Login;

