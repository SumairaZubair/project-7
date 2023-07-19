// import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi';
import Main from './components/Main';
import NavBar from './components/NavBar';
// import Main from './components/Main';
import Heading from './components/Heading';



function App() {
  return (
    <div className="App">
     {/* <h1>hello world</h1> */}
      <NavBar/>
       <Heading/>
     <FetchApi/>
    
     <Main/>
    

    </div>
  );
}

export default App;
