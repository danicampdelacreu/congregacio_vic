import { Link } from 'react-router-dom';

import "./Processo.css";

export default function Processo() {

    const handleReturnClick = () => {
        window.scrollTo(0, 0);
    };
    
    return (
        <div className="processoGeneral">
            <div className="processoFoto"></div>

            <div className="processoTitul">
                <h1>PROCESSÓ</h1>
            </div>

            <div className="processoDia">
                <p>Diumenge, 24 de Març</p>
            </div>

            <div className="processoExplicacio">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam distinctio similique assumenda, nostrum dolorem officiis temporibus ea harum quo, sed eius repudiandae eligendi veritatis cumque ipsa nemo perspiciatis! Aliquam, rerum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo minima ex quas id vero, pariatur, atque voluptate repellat temporibus quam sint autem iusto deleniti commodi fuga. Sed, neque et.
                </p>
            </div>

            <div className='processoFotos'>
                <div className='foto1'>
                    <h3>Foto 1</h3>
                    <p>Explicacio</p>
                </div>
                <div className='foto2'>
                    <h3>Foto 2</h3>
                    <p>Explicacio</p>
                </div>
                <div className='foto3'>
                    <h3>Foto 3</h3>
                    <p>Explicacio</p>
                </div>
                <div className='foto4'>
                    <h3>foto 4</h3>
                    <p>Explicacio</p>
                </div>
                <div className='foto5'>
                    <h3>Foto 5</h3>
                    <p>Explicacio</p>
                </div>
                <div className='foto6'>
                    <h3>Foto 6</h3>
                    <p>Explicacio</p>
                </div>
            </div>

            <div className="processoReturn">
                <Link to="/" onClick={handleReturnClick}>
                    Inicio
                </Link>
            </div>

        </div>
    )
}