import React from 'react';

const Login = () => {
  const handleLogin = () => {
    alert('Login successful!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;