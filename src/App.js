import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Store from './Store';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/shop" className='link'>Shop</Link>
        <Link to="/contact" className='link'>Contact</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Store/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
