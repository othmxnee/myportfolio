import React from 'react';
import { getImageUrl } from '../util';



const Hero = () => {
    return (
        <section id="hero" className="heroContainer">
            <div className="heroContent">
                <h1 className='heroTitle'>Hi I'm <strong>Othmane</strong></h1>
                <p className='heroDescription'>Creative full-stack developer crafting web, mobile, and browser-based solutions with clean code, smart architecture, and bold ideas.</p>
                <a href="/cv.pdf" download className='heroContact' >download cv</a>
            </div>
            <div>
                
                <img src={getImageUrl("hero/heroImage.jpeg")} className='heroImage' alt="Othmane's Avatar" />
            </div>
            <div className='bottomBlur'/>
            <div className='topBlur'/>
        </section>
        
    );
};

export default Hero;