import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Fotter.css'

function Footer() {
  const location = useLocation();

  return (
    <footer>
      <div className="footer-symbol">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <img src='/assets/illustrations/HomePage.svg' alt='Home' />
        </Link>
      </div>
      <div className="footer-symbol">
        <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
          <img src='/assets/illustrations/Customer.svg' alt="Profile" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
