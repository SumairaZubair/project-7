import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
// import AddToCart from './Pages/Cart';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/home' Component={HomePage} exact/>
      <Route path='/detailpage/:id' Component={DetailPage} exact/>
      <Route path='/cart' Component={Cart} exact/>
      <Route path='/' Component={LoginPage} exact/>

    </Routes>
        {/* <LoginPage/> */}
    </div>
  );
}

export default App;
