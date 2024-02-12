import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='headerGeneral'>
      <button className={`menuButton ${isMenuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
        MENU
      </button>
      {isMenuOpen && (
        <nav className='headerNav'>
          <ul>
            <li>
              <button className='closeButton' onClick={closeMenu}>X </button>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/processo" onClick={closeMenu}>
                PROCESSÓ
              </Link>
            </li>
            <li>
              <Link to="/historia" onClick={closeMenu}>
                HISTORIA
              </Link>
            </li>
            <li>
              <Link to="/noticias" onClick={closeMenu}>
                NOTICIES
              </Link>
            </li>
            <li>
              <Link to="/galeria" onClick={closeMenu}>
                GALERIA
              </Link>
            </li>
            <li>
              <Link to="/informacion" onClick={closeMenu}>
                INFORMACIÓ
              </Link>
            </li>
            <li>
              <Link to="/donativo" onClick={closeMenu}>
                AJUDA
              </Link>
            </li>
            <li>
              <Link to="/espiritual" onClick={closeMenu}>
                ESPIRITUALITAT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
