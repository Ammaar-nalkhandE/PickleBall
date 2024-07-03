import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">MyLogo</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
