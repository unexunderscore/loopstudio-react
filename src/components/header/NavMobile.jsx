import React from 'react';
import LoopLogo from '../../images/logo.svg';
import Escape from '../../images/icon-close.svg';

const NavMobile = () => {
  return (
    <div className='MobileNav'>
        <div className='logo-bar'>
        <a href="#"><img src={LoopLogo} alt="Loop logo" /></a>
        <a href="#"><img src={Escape} alt="Loop logo" /></a>
        </div>
        <div className='MobileAbout'>
        <div><a href="#">About</a></div>
        <div><a href="#">Careers</a></div>
        <div><a href="#">Events</a></div>
        <div><a href="#">Products</a></div>
        <div><a href="#">Support</a></div>
        </div>
    </div>
  )
}

export default NavMobile