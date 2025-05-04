import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Logo from '../utils/Logo.svg';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; 

  return (
    <nav className={`navbar ${isHome ? 'navbar-transparent' : 'bg-dark'}`}>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <ul className="nav-items">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
