import React, { useState } from 'react';
import './App.css';
import Home from './fakePages/Home';
import About from './fakePages/About';
import Info from './fakePages/Info';
import Navigation from './Navigation/Navigation';
import Gallery from './dogCollections/Gallery';
import Breeds from './dogCollections/Breeds';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/breeds" element={<Breeds />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
