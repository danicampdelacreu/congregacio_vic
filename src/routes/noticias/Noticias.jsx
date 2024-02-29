import { Link } from 'react-router-dom';

import "./Noticias.css"

export default function Noticias() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='noticiasGeneral'>

            <div className='noticiasFoto'></div>
            <div className='noticiasTitul'>
                <h2>NOTICIES</h2>
            </div>
            <div className='noticiasExpli'>

                <div className='evento1'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event</p>
                </div>
                <div className='evento2'>
                    <h4>Titul event</h4>
                    <h5>Data event</h5>
                    <p>explicacio event,explicacio event,explicacio event,explicacio event,explicacio event</p>
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
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};