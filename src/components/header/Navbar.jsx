import React from 'react';
import LoopLogo from '../../images/logo.svg';
import Hamburger from '../../images/icon-hamburger.svg';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navBar'> 
        <div>
            <a href="#"><img src={LoopLogo} alt="Loop logo" /></a>
        </div>
    
    <div className='navAbout desktop'>
      <div><a href="#">About</a></div>
      <div><a href="#">Careers</a></div>
      <div><a href="#">Events</a></div>
      <div><a href="#">Products</a></div>
      <div><a href="#">Support</a></div>
    </div>

      <div className='hamburger-menu mobile'><a href="#"><img src={Hamburger} alt="Hamburger menu icon" /></a></div>
    
    </div>
  )
}

export default Navbar