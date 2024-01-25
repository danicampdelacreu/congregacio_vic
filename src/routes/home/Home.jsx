import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"

export default function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main class='allMain'>
            <div className='homeFoto'>
                <p>aqui va la foto</p>
            </div>
            <div class='homeHistoria'>
                <h3>Historia</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    
                </p>
                <Link to="/Historia" onClick={scrollToTop}>+ Info</Link>
            </div>

            <div class='homeNoticias'>
                <h3>Noticies</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <Link to="/Noticias" onClick={scrollToTop}>+ Info</Link>
            </div>

            <div class='homeGaleria'>
                <h3>Galeria</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <Link to="/Galeria" onClick={scrollToTop}>+ Info</Link>
            </div>

            <div class='homeInformacion'>
                <h3>Informacio General</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <Link to="/Informacion" onClick={scrollToTop}>+ Info</Link>
            </div>

            <div class='homeDonativo'>
                <h3>Fes un donatiu</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <Link to="/Donativo" onClick={scrollToTop}>+ Info</Link>
            </div>
        </main>
    );
};