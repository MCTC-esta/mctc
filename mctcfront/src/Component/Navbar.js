import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import {Link} from "react-router-dom";
import Authoptions from "./auth/Authoptions";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
//this functio
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                MCTC
                <i className='fab fa-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/Login'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Sign in
                  </Link>
                </li>
                <li>
              <Link
                to='/Register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
              </ul>
            </div>
            <Authoptions />
          </nav>
        </>
      );
    }
    
    export default Navbar;
    
