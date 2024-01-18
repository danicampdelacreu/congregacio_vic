import { Link } from 'react-router-dom';

import "./Galeria.css"

export default function Galeria() {
    return (
        <div className='galeriaGeneral'>
            <div className='galeriaFoto'>
                <p>logo congregacio</p>
            </div>
            <div className='galeriaExpli'>
                <h2>Galeria</h2>
                <p>
                    Totes les fotos
                </p>
            </div>
            <div className="galeriaReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    );
};