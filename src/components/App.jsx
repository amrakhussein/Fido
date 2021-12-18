import React, { useState, useEffect } from 'react'

import './App.css';
import Home from './Home';
import About  from './About';
import Info  from './Info';
import Navigation from './Navigation';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


function App() {



  return (
      <div className="App">
          <Router>
            <Navigation />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/info' element={<Info />} />
            </Routes>
          </Router>
         
      </div>
  );
}

export default App;
