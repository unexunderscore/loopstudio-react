import React from 'react';
import LoopLogo from '../../images/logo.svg';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navBar'> 
        <div>
            <a href="#"><img src={LoopLogo} alt="Loop logo" /></a>
            
        </div>
    <div className='navAbout'>
      <div><a href="#">About</a></div>
      <div><a href="#">Careers</a></div>
      <div><a href="#">Events</a></div>
      <div><a href="#">Products</a></div>
      <div><a href="#">Support</a></div>

        
    </div>
    
    </div>
  )
}

export default Navbar