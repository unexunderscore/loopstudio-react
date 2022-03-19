import React from 'react'
import Navbar from './Navbar'
import './Header.css'

const Header = () => {
   
  return (
    <div className='header-container'>
        <div className='hero-container'>
         <Navbar />
        <div className='head-title'>
          <h1>Immersive experiences that deliver</h1>
        </div>

        </div>
    </div>
  )
}

export default Header