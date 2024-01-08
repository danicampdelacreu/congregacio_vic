import { Link } from 'react-router-dom';
import React, { useState } from 'react';


export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <div className = 'headerGeneral'>
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
              <Link to="/noticies">NOTICIES</Link>
            </li>
            <li>
              <Link to="/galeria">GALERIA</Link>
            </li>
            <li>
              <Link to="/informacio">INFO</Link>
            </li>
            <li>
              <Link to="/informacio">DONATIUS</Link>
            </li>
          </ul>
        </nav>
      )}
        </div>
    )
}