import React from 'react';
import './Footer.css'; 
import { getImageUrl } from '../util'; 

function Footer() {
    return (
        <footer id='contact' className="footer">
            <div className="footer-content">
                <h1 className='footer-title'>Contact</h1>
                <p className='footer-description'>Feel free to reach out!</p>
            </div>
            <div className='footer-links'>
                <div className='link-item'>
                    <img className='footer-icon' src={getImageUrl("contact/emailIcon.png")}></img>
                    <a href="mailto:ninijako88@gmail.com" className="link">
  ninijako88@gmail.com
</a>
                    </div>
                    <div className='link-item'>
                    <img className='footer-icon' src={getImageUrl("contact/githubIcon.png")}></img>
                    <a href='https://github.com/othmxnee' className='link'>https://github.com/othmxnee</a>
                    </div>
                    <div className='link-item'>
                    <img className='footer-icon' src={getImageUrl("contact/linkedinIcon.png")}></img>
                    <a href='https://www.linkedin.com/in/bouhenni-othmane-27160b265/' className='link'>https://www.linkedin.com/bouhenni-othmane</a>
                    </div>
                
                </div>
            
        </footer>
    );
}

export default Footer;