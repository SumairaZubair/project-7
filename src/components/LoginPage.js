// import React, { useEffect, useState } from 'react'
import './Login.css'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleLogin = () => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          // Login successful, navigate to home page
          navigate('/home');
        } 
      }).catch((err)=>{
        
        setErrorMessage(err.message)
      })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              value={user.username}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={user.password}
             
            />
          </div>
          
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}

        </form>
      </div>
    </div>
  );
}

export default LoginPage;