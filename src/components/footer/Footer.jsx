import { Link } from 'react-router-dom'

import './Footer.css'

import Aj from '../../assets/img/Aj.Vic.png';
import FG from '../../assets/img/f.Girbau.png';
import FP from '../../assets/img/f.Puig.png';
import FV from '../../assets/img/f.Vicus.png';
import AD from '../../assets/img/a.Ausa.png';
import Insta from '../../assets/img/instalogo.png'
import maps from '../../assets/img/maps.png'


export default function Footer() {

    return (
        <div className='footerGeneral'>
            <div className='insta'>
                <Link to="https://www.instagram.com/elsdolorsdevic/">
                    <img className="logoIH" src={Insta} />
                </Link>
                <p>@elsdolorsdevic</p>
                <Link to="https://www.google.es/maps/place/Carrer+dels+Dolors,+5,+08500+Vic,+Barcelona/@41.9281302,2.2562312,17z/data=!3m1!4b1!4m6!3m5!1s0x12a52705908dbda1:0xc2f9a920cdf93da3!8m2!3d41.9281302!4d2.2562312!16s%2Fg%2F11c243d07k?entry=ttu">
                    <img className="logoLF" src={maps} />
                </Link>
                <p>C/ dels Dolors nº5 de Vic</p>
            </div>

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
                    @2024 Congregació de la Mare de Déu dels Dolors by Daniel Campdelacreu //
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