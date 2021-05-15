import React, { useState, useEffect } from 'react';

import { Button } from './Button';
import logo from "../components/images/TB3.png";
// import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { RiShoppingCartLine} from 'react-icons/ri'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Link} from 'react-scroll';
// import {MensProducts} from './MensProducts';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
    //   window.removeEventListener('resize', showButton)
    }
  }, []);

      
  const [navbar,setnav] = useState(false);

  const changeBackground = () =>{
      if (window.scrollY >= 50){
          setnav(true);
      }
      else{
          setnav(false);
      }
  }
  window.addEventListener('scroll' , changeBackground);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={navbar? "navbar active": "navbar"}>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              

              The billionaire.
              {/* <img src={logo} style={{ width: "75%", height: "120%", }} ></img> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{
              
            }}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Men
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Women
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  New Releases
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/Log-in' className='btn-link'>
                    <Button buttonStyle='btn--outline'>LOG IN</Button>
                  </Link>
                ) : (
                  <Link to='/Log-in' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
              <li >
                <Link>
                      <RiShoppingCartLine className='nav-shopp' />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

