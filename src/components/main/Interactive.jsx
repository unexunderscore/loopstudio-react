import React from 'react';
import './Interactive.css';
import vrUser from '../../images/desktop/image-interactive.jpg'

const Interactive = () => {
  return (
<div className='main-container'>
    <div className='pictureText'>

        <div className='vrUser'>
        <img className='desktop' src={vrUser} alt="vr-user"/>
        </div>

        <div className='leader-container'>
            <div className='main-title'>
            The leader in interactive VR
            </div>
            <div className='main-content'>   
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
            </div>
        </div>
     
      </div>
</div>
  )
}

export default Interactive