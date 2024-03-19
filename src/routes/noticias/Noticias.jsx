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
                <h2>AGENDA</h2>
            </div>
            <div className='noticiasExpli'>

                <div className='evento1'>
                    <h4>La Candelera</h4>
                    <h5>2 de febrer 2024</h5>
                    <p>Església dels Dolors, 18:45 H</p>
                </div>
                <div className='evento3'>
                    <h4>Divendres de Dolors</h4>
                    <h5>2 de febrer 2024</h5>
                    <p>Església dels Dolors, 18:45 H</p>
                </div>
                <div className='evento4'>
                    <h4>La Processó</h4>
                    <h5>Diumenge de Rams</h5>
                    <p>Església dels Dolors</p>
                </div>
                <div className='evento5'>
                    <h4>Festa del Sant Crist</h4>
                    <h5>12 de juliol 2024</h5>
                    <p>Església dels Dolors, 18:45 H</p>
                </div>
                <div className='evento6'>
                    <h4>Dolors Gloriosos</h4>
                    <h5>15 de setembre 2024</h5>
                    <p>Església dels Dolors</p>
                </div>
                <div className='evento2'>
                    <h4>Missa del pollet</h4>
                    <h5>Vigília de Nadal</h5>
                    <p>Església dels Dolors, 18:45 H</p>
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