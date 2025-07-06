import React, { useState } from 'react';
import { getImageUrl } from '../util';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar'>
      <a href='/' className='nav-title'>Portfolio</a>
      <div className='menu'>
        <img src={isOpen? getImageUrl('nav/closeIcon.png'):getImageUrl('nav/menuIcon.png')} 
        alt='Menu Icon' 
        className='menu-icon'
        onClick={()=>{setIsOpen(!isOpen)}} />
        <ul className={`${'menu-ul'} ${isOpen && 'open'}`}
        onClick={() => setIsOpen(false)}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;