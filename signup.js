// Signup.js

import React from 'react';

const Signup = () => {
  return (
    <div id="root">
      <div className="card">
        <h2>Sign Up</h2>
        <form action="/signup" method="POST">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required /><br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required /><br /><br />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
