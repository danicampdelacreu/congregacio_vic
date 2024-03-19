import { Link } from 'react-router-dom';

import "./Processo.css";

import F1 from '../../assets/img/Processo9.jpg'
import F2 from '../../assets/img/Processo10.jpg'
import F3 from '../../assets/img/Processo5.jpg'
import F4 from '../../assets/img/processo6.jpg'

export default function Processo() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };
    
    return (
        <div className="processoGeneral">
            <div className="processoFoto"></div>

            <div className="processoTitul">
                <h2>PROCESSÓ</h2>
            </div>

            <div className="processoDia">
                <p>Diumenge de Rams</p>
            </div>

            <div className="processoExpli">
                <p>La primera referència a la Processó dels Armats o del Silenci, és de 1750. Aquesta és, segons els experts, la manifestació piatosa que millor ha guardat les formes tradicionals i, per tant, un interessant viatge al segle XVIII.</p>
                <p>Pocs han estat els anys en què no s'ha celebrat, per causa de la pluja o de pandèmies. El període més llarg va ser des del 1973 al 1981, any en què uns joves i la voluntat de la gent, varen ajudar a recuperar-la i amb una gran assistència.La Processó, no ha restat immòbil als canvis del nostre temps. Essent oberta a totes les persones, sense limitació de cap mena.</p>
                <p>L'ambient dels carrers del centre històric de la ciutat amb el foc, els papus i els armats i aquell silenci, trencat només per les llances picant a terra i el cant de l'Stabat Mater crea una atmosfera molt especial. Fins al punt que gent d'arreu participa d'aquest acte multitudinari, que agrupa a unes 500 persones.</p>
                <p>Els vestits dels Armats són fets per la sastreria Vinyals de Barcelona el 1951, la tropa porta la capa de color vermell i els capitans de color blau. També els infants que fan llum porten la capa de colors, en funció de qui acompanyen. El 1981 es va fer un cos nou amb capa morada, el color propi de la Setmana Santa, i que acompanya les imatges de Crist a la creu i de la Verge Dolorosa</p>
                <p>Tota la resta de participants porten la vesta negra, que és la tipología de vestir pròpia de la Congregació. Excepte els portants de les imatges i els cors, per qüestions pràctiques, la resta arrosseguen un annex, dit cua, al final de la vesta i es cobreixen el cap amb un cucurutxo que només deixa visible els ulls. Porten guants negres i llueixen un cor traspassat per set espases al pit, que són els set dolors de la Mare de Déu, i un cinturó d'on hi penja una tira de cuir i una corona, que és una versió d'un rosari. Pel que fa al calçat aquest ha de ser negre, tot i que, hi ha qui decideix anar descalçat.</p>
            </div>

            <div className='processoFotos'>
                <img className='pfoto1'src={F1} alt="pfoto1"/>     
                <img className='pfoto2'src={F2} alt="pfoto2"/>
                <img className='pfoto3'src={F4} alt="pfoto3"/>
                <img className='pfoto4'src={F3} alt="pfoto4"/>
            </div>

            <div className="processoReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    )
}