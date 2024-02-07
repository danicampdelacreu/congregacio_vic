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
              <Link to="/prossessor" onClick={closeMenu}>
                PROCESSOR
              </Link>
            </li>
            <li>
              <Link to="/historia" onClick={closeMenu}>
                HISTORIA
              </Link>
            </li>
            <li>
              <Link to="/noticias" onClick={closeMenu}>
                NOTICIAS
              </Link>
            </li>
            <li>
              <Link to="/galeria" onClick={closeMenu}>
                GALERIA
              </Link>
            </li>
            <li>
              <Link to="/informacion" onClick={closeMenu}>
                INFORMACION
              </Link>
            </li>
            <li>
              <Link to="/donativo" onClick={closeMenu}>
                DONATIVOS
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
