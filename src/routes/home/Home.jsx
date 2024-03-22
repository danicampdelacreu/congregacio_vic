import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";


export default function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main className='allMain'>

            <div className='homeFoto'></div>

            <div className='homeProcesso'>
                <div className='homeProcessoIn'>
                    <h3>Processó</h3>
                    <Link to="/Processo" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div className='homeHistoria'>
                <div className='homeHistoriaIn'>
                    <h3>Història</h3>
                    <Link to="/Historia" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div className='homeNoticias'>
                <div className='homeNoticiasIn'>
                    <h3>Notícies</h3>
                    <Link to="/Noticias" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div className='homeGaleria'>
                <div className='homeGaleriaIn'>
                    <h3>Galeria</h3>
                    <Link to="/Galeria" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div className='homeDonativo'>
                <div className='homeDonativoIn'>
                    <h3>Ajuda al patrimoni</h3>
                    <Link to="/Donativo" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div className='homeEspiritual'>
                <div className='homeEspiritualIn'>
                    <h3>Espiritualitat</h3>
                    <Link to="/Espiritual" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>

            <div className='homeInformacion'>
                <div className='homeInformacionIn'>
                    <h3>Informació General</h3>
                    <Link to="/Informacion" onClick={scrollToTop}>+ Info</Link>
                </div>
            </div>
            
        </main>
    );
};