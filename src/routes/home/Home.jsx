import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";


export default function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main class='allMain'>

            <div className='homeFoto'></div>

            <div class='homeProcesso'>
                <div className='homeProcessoIn'>
                    <h3>Processó</h3>
                    <Link to="/Processo" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeHistoria'>
                <div className='homeHistoriaIn'>
                    <h3>Historia</h3>
                    <Link to="/Historia" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeNoticias'>
                <div className='homeNoticiasIn'>
                    <h3>Noticies</h3>
                    <Link to="/Noticias" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeGaleria'>
                <div className='homeGaleriaIn'>
                    <h3>Galeria</h3>
                    <Link to="/Galeria" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeDonativo'>
                <div className='homeDonativoIn'>
                    <h3>Ajuda al patrimoni</h3>
                    <Link to="/Donativo" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeEspiritual'>
                <div className='homeEspiritualIn'>
                    <h3>Espiritualitat</h3>
                    <Link to="/Espiritual" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div class='homeInformacion'>
                <div className='homeInformacionIn'>
                    <h3>Informacio General</h3>
                    <Link to="/Informacion" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>
            
        </main>
    );
};