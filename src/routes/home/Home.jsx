import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"

export default function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main class='allMain'>
            <div class='homeHistoria'>
                <h3>Historia</h3>
                <p>Mini explicacio historia</p>
                <Link to="/Historia" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeNoticias'>
                <h3>Noticies</h3>
                <p>Mini explicacio noticies</p>
                <Link to="/Noticias" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeGaleria'>
                <h3>Galeria</h3>
                <p>Explicacio galeria</p>
                <Link to="/Galeria" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeInformacion'>
                <h3>Informacio General</h3>
                <p>Explicacio informacio</p>
                <Link to="/Informacion" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeDonativo'>
                <h3>Fes un donatiu</h3>
                <p>Explicacio donatiu</p>
                <Link to="/Donativo" onClick={scrollToTop}>Anar</Link>
            </div>
        </main>
    );
};