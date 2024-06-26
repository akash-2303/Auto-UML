import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try{
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_id: username, password }),
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      setUsername('');
      // setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      // If sign up is successful, navigate to the target page
      navigate('/login');

    } catch (error) {
      setError('Signup failed');
    }
  };

  return (
    <div>
      <div className="card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required /><br /><br />

          {/* <label htmlFor="email">Email:</label> */}
          {/* <input type="email" id="email" name="email" required /><br /><br /> */}

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required /><br /><br />

          <input type="submit" value="Sign Up" />
          {error && <p className="error">{error}</p>}
        </form>
        <button onClick={() => navigate('/login')} className="link-button">Already have an account? Log in</button>
      </div>
    </div>
  );
};

export default Signup;
