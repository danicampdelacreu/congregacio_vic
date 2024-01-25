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
                <div className='foto1'></div>
                <div className='foto2'></div>
                <div className='foto3'></div>
                <div className='foto4'></div>
                <div className='foto5'></div>
                <div className='foto6'></div>
            </div>
            <div className="galeriaReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    );
};