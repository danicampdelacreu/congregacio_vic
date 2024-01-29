import { Link } from 'react-router-dom';

import "./Galeria.css"

export default function Galeria() {
    return (
        <div className='galeriaGeneral'>
            <div className='galeriaFoto'>
                <p>aqui va la foto</p>
            </div>
            <div className='galeriaExpli'>
                <h2>Galeria</h2>
                <div className='carpetaFotos'>
                    <div className='foto1'>
                        <p>Foto 1</p>
                    </div>
                    <div className='foto2'>
                        <p>Foto 2</p>
                    </div>
                    <div className='foto3'>
                        <p>Foto 3</p>
                    </div>
                    <div className='foto4'>
                        <p>foto 4</p>
                    </div>
                    <div className='foto5'>
                        <p>Foto 5</p>
                    </div>
                    <div className='foto6'>
                        <p>Foto 6</p>
                    </div>
                </div>
            </div>
            <div className="galeriaReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    );
};