import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";


export default function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main class='allMain'>
            <div className='homeFoto'>
                <h2>VENERABLE CONGREGRACIÓ DELS DOLORS DE VIC </h2>
            </div>

            <div class='homeProssessor'>
                <div className='homeProssessorIn'>
                    <h3>Processor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <Link to="/Prossessor" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeHistoria'>
                <div className='homeHistoriaIn'>
                    <h3>Historia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <Link to="/Historia" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeNoticias'>
                <div className='homeNoticiasIn'>
                    <h3>Noticies</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <Link to="/Noticias" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeGaleria'>
                <div className='homeGaleriaIn'>
                    <h3>Galeria</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <Link to="/Galeria" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeInformacion'>
                <div className='homeInformacionIn'>
                    <h3>Informacio General</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <Link to="/Informacion" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeDonativo'>
                <div className='homeDonativoIn'>
                    <h3>Fes un donatiu</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <Link to="/Donativo" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeEspiritual'>
                <div className='homeEspiritualIn'>
                    <h3>Espiritualitat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <Link to="/Espiritual" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>
        </main>
    );
};