import React from 'react'
import logo from './img/logo.png'
// import { Link } from 'react-router-dom'
// import Cart from './Cart'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navBar'>
        <div className='logo'>
         <img  className='logo-img' src={logo} alt='logo'></img>
         </div>
         <div className='nav-Btn'>
         <button className='login'>Login</button>
         <button className='login-sign'>Sign up</button>
         <Link to='/cart'> 
         <button className='login'>Cart</button>
         </Link>
         </div>
    </div>
  )
}

export default NavBar