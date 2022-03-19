import React from 'react';
import './Footer.css';
import LoopLogo from '../../images/logo.svg';
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='conty'>
        <div className="socials">
           <a className='foologo-link' href="#"><img className='footer-logo' src={LoopLogo} alt="Loop logo" /></a>
          <div className='social-icons desktop'>
          <a href="#"><img src={Facebook} alt="Facebook" /></a>
          <a href="#"><img src={Twitter} alt="Twitter" /></a>
          <a href="#"><img src={Pinterest} alt="Pinterest" /></a>
          <a href="#"><img src={Instagram} alt="Instagram" /></a>
          </div>
        </div>
        <div className="foot-bar"> 
          
          <div className="links">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </div>

          <div className='social-icons mobile'>
          <a href="#"><img src={Facebook} alt="Facebook" /></a>
          <a href="#"><img src={Twitter} alt="Twitter" /></a>
          <a href="#"><img src={Pinterest} alt="Pinterest" /></a>
          <a href="#"><img src={Instagram} alt="Instagram" /></a>
          </div>

          <div className="copyRight">© 2021 Loopstudios. All rights reserved.</div>
        
      </div>
      </div>
    </div>
  )
}

export default Footer