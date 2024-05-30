// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          {/* Use Link component instead of anchor tags */}
          <li><Link to="/" className="nav-link">Home</Link></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
