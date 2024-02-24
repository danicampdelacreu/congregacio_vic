import { Link } from 'react-router-dom'

import './Footer.css'

import Aj from '../../assets/img/Aj.Vic.png';
import FG from '../../assets/img/f.Girbau.png';
import FP from '../../assets/img/f.Puig.png';
import FV from '../../assets/img/f.Vicus.png';
import AD from '../../assets/img/a.Ausa.png';


export default function Footer() {

    return (
        <div className='footerGeneral'>

            <div className="footerPatro">

                <Link to="https://www.vic.cat">
                    <img className="ajVic" src={Aj} />
                </Link>

                <Link to="https://www.fundaciogirbau.com">
                    <img className="fGirbau" src={FG} />
                </Link>
                <Link to="http://www.puig-porret.cat/puigporret_fundacio.htm">
                    <img className="fPuig" src={FP} />
                </Link>
                <Link to="https://www.forumvicus.cat/es/">
                    <img className="fVicus" src={FV} />
                </Link>
                <Link to="https://www.parkingsvic.com">
                    <img className="aDausa" src={AD} />
                </Link>
            </div>
            <div className='footerLinkDani'>
                <p>
                    @2024 Congregació de la Mare de Deu dels Dolors by Daniel Campdelacreu //
                    <a href=
                        "https://linkedin.com/in/danicampdelacreu-developer">
                        _LinkedIn
                    </a>
                    <a href=
                        "https://github.com/danicampdelacreu">
                        _GitHub_//
                    </a>
                </p>
            </div>
        </div>// fin footerGeneral
    )
}

// footer background color green