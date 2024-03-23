import { Link } from 'react-router-dom';

import "./Historia.css"

export default function Historia() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='historiaGeneral'>

            <div className='historiaFoto'></div>
            <div className='historiaTitulo'>
                <h2>HISTÒRIA</h2>
            </div>
            <div className='historiaExpli'>

                <p>Tot i que anteriorment ja existia una capella amb aquesta advocació a l’església de la Pietat, la història de la Venerable Congregació de la Marededéu dels Dolors de Vic es remunta al 21 d’abril de 1689, gràcies al Dr. Francesc Garrigó. Els inicis no van ser en aquesta casa que tots coneixem avui, sinó en un oratori particular del canonge Ramis, a l’hospital de la Santa Creu. No serà fins el 18 de setembre de 1724 que s’iniciaran les obres de construcció de l’actual església, que s’allargaran fins el 12 de setembre de 1728. Gràcies, en aquesta ocasió, a la intervenció del canonge Esteve Ferrer.</p>
                <p>El segle XVIII serà un moment de gran importància per a la nostra Congregació, ja que, no només haurà aixecat una església, sinó que també es faran altres grans aportacions històriques. Per una banda, el 1750 s’instaurà l'acte penitencial més nombrós i important de la Setmana Santa vigatana, la Processó dels Armats. Aquesta processó, a partir de 1760, ja podrà treure al carrer la imatge de la Verge Dolorosa que tothom coneix i que serà esculpida al taller vigatà dels Real.</p>
                <p>Des d’un inici i malgrat la seva llegenda negra, la Congregació ha estat un espai de trobada del poble en tot el seu espectre social, persones riques i persones pobres s’han reunit de tu a tu. Amb una vestimenta de treball, que els iguala a tots, com és la vesta negra. I més enllà d’aquest fet, una altra marca important d’aquesta Congregació mariana, ha estat el fet de tenir un espai per a les dones i regit per aquestes. Que és la institució de les Sagristanes.</p>
                <p>La Sagristana pren el model de les ajudants de cambra de les grans reines de la història i no hi ha reina més important que la del Cel. Així, la seva tasca ha estat vestir la Verge Dolorosa i mantenir l’espai en condicions i adient a la seva grandesa.</p>
                <p>Però també s’han conegut moments foscos en la història dels Dolors, començant per la Guerra Civil que va malmetre el retaule de 1760 (només en resten un escut de la família Beuló, els 4 angelets del peu de la Dolorosa, salvats pel fabricant de sants Clotet, i el cap de la Verge, salvat per una nena que es deia Lourdes Coma). Igualment, des de 1973 fins a 1981, quan es va deixar de celebrar la Processó dels Armats.</p>
                <p>L’església és doncs un lloc de història i de patrimoni, que cal conèixer i cuidar. A més del retaule major refet entre els anys 50 i 60 pel taller Seguranyes, també tenim dos retaules laterals de postguerra un dedicat a Sant Ramon de Penyafort patró dels advocats i l’altre a Sant Cosme i Damià patrons dels metge i Santa Apol·lònia patrona dels dentistes. El 1970 el Dr. Junyent suggereix la compra del retaule barroc de Sant Francesc Xavier i Ignasi de Loiola, com així es farà. Aquest, des del 2016, dialoga amb la pintura del granollerí Jordi Diaz Alamà. La incorporació més recent és la reproducció de postguerra del Crist de l’Hospital de la Santa Creu del vigatà Pere Puntí. Totes aquestes joies estan embolcallades pel so de l’orgue barroc, refet el 2009 i protegit per un sostre decorat amb pintures de finals del 1887 dels germans Sala i Josep Gallés.</p>
            </div>

            <div className="historiaReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};