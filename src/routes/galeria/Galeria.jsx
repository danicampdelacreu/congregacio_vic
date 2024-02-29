import { Link } from 'react-router-dom';

import "./Galeria.css"

export default function Galeria() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='galeriaGeneral'>

            <div className='galeriaFoto'></div>

            <div className='galeriaExpli'>
                <h2>GALERIA DE FOTOS</h2>
                <div className='galeriaA'> 
                <h4>2015</h4>
                </div>
                <div className='carpetaFotos'>
                    <div className='gfoto1'>
                        <h3>Foto 1</h3>
                    </div>
                    <div className='gfoto2'>
                        <h3>Foto 2</h3>
                    </div>
                    <div className='gfoto3'>
                        <h3>Foto 3</h3>
                    </div>
                    <div className='gfoto4'>
                        <h3>foto 4</h3>
                    </div>
                    <div className='gfoto5'>
                        <h3>Foto 5</h3>
                    </div>
                    <div className='gfoto6'>
                        <h3>Foto 6</h3>
                    </div>

                </div>

            </div>

            <div className="galeriaReturn">
                <Link to="/" onClick={returnClick}>
                    Inicio
                </Link>
            </div>

        </div>
    );
};