import { Link } from 'react-router-dom';

import "./Noticias.css"

export default function Noticias() {

    const handleReturnClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='noticiasGeneral'>

            <div className='noticiasFoto'>
                <p>foto Noticies</p>
            </div>

            <div className='noticiasExpli'>
                <h2>Noticies</h2>
                <div className='evento1'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>
                <div className='evento2'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>
                <div className='evento3'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>
                <div className='evento4'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>
                <div className='evento5'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>
                <div className='evento6'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>

            </div>

            <div className="noticiasReturn">
                <Link to="/" onClick={handleReturnClick}>
                    Inicio
                </Link>
            </div>

        </div>
    );
};