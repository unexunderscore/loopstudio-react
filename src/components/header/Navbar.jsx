import React from 'react';
import LoopLogo from '../../images/logo.svg';
import Hamburger from '../../images/icon-hamburger.svg';
import { useState } from 'react';
import Escape from '../../images/icon-close.svg';
import './Navbar.css'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  
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

    <div className={`MobileNav ${open ? 'show' : 'unShow'}`}>

        <div className='logo-bar'>
        <a href="#"><img src={LoopLogo} alt="Loop logo" /></a>
        <a href="#"onClick={() => setOpen(false)}><img src={Escape} alt="Loop logo" /></a>
        </div>

          <div className='MobileAbout'>
          <div><a href="#">About</a></div>
          <div><a href="#">Careers</a></div>
          <div><a href="#">Events</a></div>
          <div><a href="#">Products</a></div>
          <div><a href="#">Support</a></div>
          </div>
    </div>

      <div className='hamburger-menu mobile'><a 
      onClick={() => setOpen(true)}
      href="#"><img src={Hamburger} alt="Hamburger menu icon" /></a></div>
   
    
  </div>
 

 
  ) 
}

export default Navbar 