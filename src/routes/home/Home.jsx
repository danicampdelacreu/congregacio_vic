import React from 'react';
import { Link } from 'react-router-dom';

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

            <div class='donatiuinformacio'>
                <h3>Fes un donatiu</h3>
                <p>Explicacio donatiu</p>
                <Link to="/Donatiu" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeNoticies'>
                <h3>Noticies</h3>
                <p>Mini explicacio noticies</p>
                <Link to="/Noticies" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeGaleria'>
                <h3>Galeria</h3>
                <p>Explicacio galeria</p>
                <Link to="/Galeria" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeinformacio'>
                <h3>Informacio General</h3>
                <p>Explicacio informacio</p>
                <Link to="/Informacio" onClick={scrollToTop}>Anar</Link>
            </div>

        </main>
    );
};