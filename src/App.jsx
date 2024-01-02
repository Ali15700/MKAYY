import  Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Message from './Components/Message/Message';

import './App.css';
 

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </Router>   
    </div>
  );
}

export default App;
