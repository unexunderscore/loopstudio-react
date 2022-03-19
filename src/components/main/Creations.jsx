import React from 'react';
import './Creations.css';


const Creations = () => {
  return (
    <div>
        <div className="cre-bar">
            <div className='cre-title'>Our Creations</div>
            <div className='cre-btn desktop'><button>See all</button></div>
        </div>
        
        <div className='grid-ground'>
            <a href="#"><div className='earth'><div className='img-text'>Deep earth</div></div></a>
            <a href="#"><div className='Arcade'><div className='img-text'>Night arcade</div></div></a>
            <a href="#"><div className='Soccer'><div className='img-text'>Soccer team vr</div></div></a>
            <a href="#"><div className='Grid'><div className='img-text'>The {<br/>} grid</div></div></a>
            <a href="#"><div className='Fromabove'><div className='img-text'>From up above vr</div></div></a>
            <a href="#"><div className='Pocket'><div className='img-text'>Pocket borealis</div></div></a>
            <a href="#"><div className='Curiosity'><div className='img-text'>The curiosity</div></div></a>
            <a href="#"><div className='Fisheye'><div className='img-text'>Make it fisheye</div></div></a> 
        </div>
        <div className='mobile-btn'>
          <div className='cre-btn mobile'><button>See all</button></div>
        </div>
         
    </div>
  )
}

export default Creations