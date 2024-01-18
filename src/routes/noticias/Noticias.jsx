import { Link } from 'react-router-dom';

import "./Noticias.css"

export default function Noticias() {
    return (
        <div className='noticiasGeneral'>
            <div className='noticiasFoto'>
                <p>foto Noticies</p>
            </div>
            <div className='noticiasExpli'>
                <h2>Noticies</h2>
                <p>
                    Eventos de tot l'any
                </p>
            </div>
            <div className="noticiasReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    );
};