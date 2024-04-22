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
                <h2>LA PROCESSÓ DELS ARMATS O DEL SILENCI.</h2>
            </div>

            <div className="processoDia">
            <p style={{ fontWeight: 600 }}>Espiritualitat i Barroc.</p>
            </div>

            <div className="processoExpli">
                <p>La primera referència que tenim de la nostra processó de penitència és de l’any 1750.</p>
                <p>Aquesta és, segons els experts, una processó única a tot Europa, l’única manifestació pietosa que ha guardat intactes les seves formes i rituals des dels seus inicis fins l’actualitat. Per tant, viure-la és un autèntic viatge espiritual a ple segle XVIII.</p>
                <p>Tot i així, no ha restat immòbil als avenços socials i és una processó oberta a tothom, sense limitacions de cap mena.</p>
                <p>Pocs han estat els anys en què no s'ha celebrat, per causa de la pluja o de pandèmies. El període més llarg va ser des del 1973 fins al 1981, any en què un grup de joves acompanyats per la voluntat de la gent, varen voler recuperar, amb un gran èxit d’assistència, aquest símbol espiritual de la ciutat de Vic.</p>
                <p>Des de llavors, cada Diumenge de Rams a les 9 del vespre, els carrers del centre històric de la ciutat es continuen impregnant d’un silenci sepulcral, trencat només pels retrucs de les llances dels armats, l’acompassat i solemne toc de les campanes i l’emotiu cant de l’Stabat Mater, creant un ambient de màxima espiritualitat i emoció. </p>
                <p>Les més de 500 persones que any rere any hi participen, tret dels armats, vesteixen amb el vestit tradicional de la congregació; vesta negra amb cucurulla tapant del rostre, guants i calçat també negres, un fustigador i una corona (rosari de Maria Dolorosa) penjant del cinturó i al pit hi llueixen un cor daurat traspassat per set espases, que simbolitzen els set dolors de la Mare de Déu. També es molt comú veure-hi diversos penitents descalços.</p>
                <p>Tots aquests penitents abillats amb vesta negra, porten a la mà llargues atxes enceses, excepte els portadors dels improperis, paraules i sibil·les, els portadors del Sant Crist i de la imatge de la Mare de Déu i dels cantaires dels 3 cors de cants gregorians que acompanyen la processó.</p>
                <p>Els diferents cossos d’Armats vesteixen diferent en funció de qui acompanyen; la tropa porta la capa de color vermell i els capitans la porten de color blau, tots ells feta a la prestigiosa sastreria Vinyals de Barcelona al 1951. El 1981 es va fer un cos nou amb capa morada, el color propi de la Setmana Santa, i que acompanya les imatges de Crist a la creu i de la Verge Dolorosa.</p>
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