import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Community Help Hub</div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/request-help">Request Help</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
