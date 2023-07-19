import React from 'react'
import logo from './img/logo.png'

function NavBar() {
  return (
    <div className='navBar'>
        <div className='logo'>
         <img  className='logo-img' src={logo} alt='logo'></img>
         </div>
         <div className='nav-Btn'>
         <button className='login'>Login</button>
         <button className='login-sign'>Sign up</button>
         </div>
    </div>
  )
}

export default NavBar