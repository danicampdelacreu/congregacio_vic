import { Link } from 'react-router-dom';

import "./Galeria.css"

export default function Galeria() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='galeriaGeneral'>

            <div className='galeriaFoto'>
                <p>aqui va la foto</p>
            </div>

            <div className='galeriaExpli'>
                <h2>Galeria</h2>

                <div className='carpetaFotos'>
                    <div className='foto1'>
                        <h3>Foto 1</h3>
                    </div>
                    <div className='foto2'>
                        <h3>Foto 2</h3>
                    </div>
                    <div className='foto3'>
                        <h3>Foto 3</h3>
                    </div>
                    <div className='foto4'>
                        <h3>foto 4</h3>
                    </div>
                    <div className='foto5'>
                        <h3>Foto 5</h3>
                    </div>
                    <div className='foto6'>
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