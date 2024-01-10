import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './Header.css'
export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <div className = 'headerGeneral'>
          <p>logo</p>
            <button className={`menuButton ${isMenuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
        MENU
      </button>
      {isMenuOpen && (
        <nav className='headerNav'>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/historia">HISTORIA</Link>
            </li>
            <li>
              <Link to="/noticias">NOTICIES</Link>
            </li>
            <li>
              <Link to="/galeria">GALERIA</Link>
            </li>
            <li>
              <Link to="/informacion">INFO</Link>
            </li>
            <li>
              <Link to="/donativo">DONATIUS</Link>
            </li>
          </ul>
        </nav>
      )}
        </div>
    )
}