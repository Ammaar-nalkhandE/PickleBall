import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 // Adjust the path as needed
import HomePage from './pages/homepage';
import About from './pages/about';

const App = () => {
  return (
  
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
