import { Link } from 'react-router-dom';

import "./Galeria.css"

import F1 from '../../assets/img/Galeria1.jpg'
import F2 from '../../assets/img/Galeria2.jpg'
import F3 from '../../assets/img/Galeria3.jpg'

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
                <h4></h4>
                </div>
                <div className='carpetaFotos'>
                    <img className='gfoto1'src={F1}/>
                    <img className='gfoto2'src={F2}/> 
                    <img className='gfoto3'src={F3}/> 
                    <img className='gfoto1'src={F1}/>   
                    <img className='gfoto2'src={F2}/> 
                    <img className='gfoto3'src={F3}/>   
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