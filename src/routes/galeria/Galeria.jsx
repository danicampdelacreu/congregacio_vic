import { Link } from 'react-router-dom';

import "./Galeria.css"

import F1 from '../../assets/img/Galeria1.jpg'
import F2 from '../../assets/img/Galeria2.jpg'
import F3 from '../../assets/img/Galeria3.jpg'
import F4 from '../../assets/img/Galeria4.jpg'
import F5 from '../../assets/img/Galeria5.jpg'
import F6 from '../../assets/img/Galeria6.jpg'
import F7 from '../../assets/img/Galeria7.jpg'
import F8 from '../../assets/img/Galeria8.jpg'
import F9 from '../../assets/img/Galeria9.jpg'
import F10 from '../../assets/img/Reglament.jpg'

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
                    <img className='gfoto1'src={F1} alt="gfoto1"/>
                    <img className='gfoto2'src={F2} alt="gfoto2"/> 
                    <img className='gfoto3'src={F3} alt="gfoto3"/> 
                    <img className='gfoto1'src={F4} alt="gfoto1"/>   
                    <img className='gfoto2'src={F5} alt="gfoto2"/> 
                    <img className='gfoto3'src={F6} alt="gfoto3"/>  
                    <img className='gfoto3'src={F7} alt="gfoto3"/> 
                    <img className='gfoto3'src={F8} alt="gfoto3"/> 
                    <img className='gfoto3'src={F9} alt="gfoto3"/> 
                    <img className='gfoto3'src={F10} alt="gfoto3"/>  
                </div>

            </div>

            <div className="galeriaReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};