
import React from 'react'
import FetchApi from '../components/FetchApi';
import NavBar from '../components/NavBar';
import Heading from '../components/Heading'
// import Cart from '../components/Cart'
// import LoginPage from '../components/LoginPage';


const HomePage = () => {
    // const [count,setCount]= useState([])
   
    
     return (
        <div>
        <NavBar/>
        <Heading/>
        <FetchApi/>
        {/* <LoginPage/> */}
        

    </div>
  )
}

export default HomePage