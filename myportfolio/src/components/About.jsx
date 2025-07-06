import React from 'react';
import { getImageUrl } from '../util';

const About = () => {
    return (
        <div id="about" className="aboutContainer">
            <h1 className='aboutTitle'>About</h1>
            <div className='aboutContent' >
             <img src={getImageUrl("about/aboutImage.png")} className='aboutImage' alt="about image" />
             <ul className='aboutCards'>
                <li>
                    <img src={getImageUrl("about/cursorIcon.png")} className='cursorIcon' alt="icon" />
                    <div className='aboutCardContent'>
                    <h3 className='aboutCardTitle'>Web Developer</h3>
                    <p className='aboutCardDescription'>I build full-stack applications using modern frameworks and APIs, with clean and scalable code</p>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("about/serverIcon.png")} className='serverIcon' alt="icon" />
                    <div className='aboutCardContent'>
                    <h3 className='aboutCardTitle'>Backend Developer</h3>
                    <p className='aboutCardDescription'>I specialize in backend systems with Django, DRF, node js, and cloud deployment on AWS </p>
                    </div>
                </li>   
                <li>
                    <img src={getImageUrl("about/uiIcon.png")} className='uiIcon' alt="icon" />
                    <div className='aboutCardContent'>                   
                    <h3 className='aboutCardTitle'>My Goal</h3>
                    <p className='aboutCardDescription'>To deliver high-quality software solutions that meet the needs of users</p>
                    </div>
                </li>
            
             </ul>
             </div>
            
        </div>
    );
};

export default About;