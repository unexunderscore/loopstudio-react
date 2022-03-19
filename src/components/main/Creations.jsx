import React from 'react';
import './Creations.css';
import dEarth from '../../images/desktop/image-deep-earth.jpg';
import nArcade from '../../images/desktop/image-night-arcade.jpg';
import sTeam from '../../images/desktop/image-soccer-team.jpg';
import tGrid from '../../images/desktop/image-grid.jpg';
import fAbove from '../../images/desktop/image-from-above.jpg';
import pBorealis from '../../images/desktop/image-pocket-borealis.jpg';
import tCruiosity from '../../images/desktop/image-curiosity.jpg';
import mFisheye from '../../images/desktop/image-fisheye.jpg';

const Creations = () => {
  return (
    <div>
        <div className="cre-bar">
            <div className='cre-title'>Our Creations</div>
            <div className='cre-btn'><button>See all</button></div>
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
        
    </div>
  )
}

export default Creations