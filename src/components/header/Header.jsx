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
      <div className='headerContent'>
        <button className={`menuButton ${isMenuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <h1 className='pageTitle'>VENERABLE CONGREGACIÓ DELS DOLORS DE VIC</h1>
      </div>
      {isMenuOpen && (
        <nav className='headerNav'>
          <ul>
            <li>
              <button className='closeButton' onClick={closeMenu}>X </button>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                INICI
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
                NOTÍCIES
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
