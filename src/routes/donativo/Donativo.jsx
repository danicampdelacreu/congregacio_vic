import React from 'react';
import { Link } from 'react-router-dom';

import "./Donativo.css"

export default function Donativo() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };
    const vullAjudarClick = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <div className='donativoGeneral'>

            <div className='donativoFoto'></div>

            <div className='donativoExpli'>
                <h2>AJUDA AL PATRIMONI</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint unde officia nesciunt ad, facere, esse itaque hic rem, nisi iste illum! In et iure voluptatem doloribus sequi explicabo iusto!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore dolorem libero in unde. Odio sunt ad adipisci quis doloremque nobis placeat nemo obcaecati. Modi labore repellendus ea temporibus omnis?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae quas impedit iusto culpa ex nobis dignissimos id ipsa porro eos distinctio, nisi modi saepe tempore voluptas consequatur facilis? Ut?
                </p>
                <p>Si estas disposat ajudar-nos nomes tens que clicar a Vull Ajudar i rellena el formulari amb la teva informacio i la paraula Vull Ajudar, ens posarem en contacte amb tu via e-mail.</p>
                <Link to="/Informacion" onClick={vullAjudarClick}>
                    Vull Ajudar
                </Link>
            </div>

            <div className="donativoReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};