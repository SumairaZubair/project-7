// import React, { useEffect, useState } from 'react'
// import './Login.css'
// import {useNavigate} from "react-router-dom"
// // import HomePage from '../Pages/HomePage';

// function LoginPage() {
//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');
// const [user,setUser] = useState({username: '' , password: ''})
// const navigate = useNavigate()
// useEffect(()=> {
//   localStorage.setItem('user' , JSON.stringify(user))
// },[user])
// const handleLogin=()=>{
//   fetch('https://fakestoreapi.com/auth/login',{
//     method:'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: user.username,
//       password: user.password
//         // username: "mor_2314",
//         // password: "83r5^_"
       
//     })
// })
//       .then(response=> response.json())
//     .then((data) => {
//       console.log(data)
//       if (user) {
//       // console.log(user)
//         navigate('/home');
//       //  console.log("success")
//       } else {
//        console.log('error')
       
//       }
//     })

// }
// // debugger;
// const handleChange = (event) => {
//   const {name , value} = event.target;
//   setUser((prevUser) => ({
//     ...prevUser,
//     [name] : value,
//   }))
// }
// // debugger;
//   return (
//      <div className="login-container">
//   <div className="login-form">
//     <h2>Login</h2>
//     <form>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="username"
//           id="username"
//           placeholder="Enter your username"
//           onChange={handleChange} value={user.state}
//           // value='username'
//           // onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Enter your password"
//           onChange={handleChange} value={user.state}
//           // value='password'
//           // onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       {/* <Link to="/home"><button onClick={()=>handleLogin()}>Login</button></Link> */}
//     <button onClick={()=>{handleLogin()}}>Login</button>

//     </form>
//   </div>
// </div>)
  
  
// };

 
// export default LoginPage



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
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
        } else {
          // Login failed, show error message or take appropriate action
          console.log('Error: Invalid username or password');
        }
      });
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
        </form>
      </div>
    </div>
  );
}

export default LoginPage;