import React from 'react'
import '../css/navbar.css';

function Nav() {
    return ( <nav className="navbar">
    <ul className="nav-list">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>);
}

export default Nav; 
