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

                <p>Tot i que anteriorment ja existia una capella amb advocació a la Mare de Déu dels Dolors a l’església de la Pietat, la història de la Venerable Congregació de la Mare de Déu dels Dolors de Vic es remunta al 21 d’abril de 1689, gràcies al Dr. Francesc Garrigó. </p>
                <p>Els inicis de la Congregació no van lligats a la seu que tots coneixem avui, sinó en un oratori particular del canonge Ramis, a l’hospital de la Santa Creu. No serà fins el 18 de setembre de 1724 que s’iniciaran les obres de construcció de l’actual església, que s’allargaran fins el 12 de setembre de 1728. Gràcies, en aquesta ocasió, a la intervenció del canonge Esteve Ferrer.</p>
                <p>El segle XVIII serà un moment de gran importància per a la nostra Congregació, ja que, més enllà de la construcció de l’església, es faran altres grans aportacions històriques i culturals a la ciutat.</p>
                <p>Per una banda, el 1750 s’instaurà l'acte penitencial més nombrós i important de la Setmana Santa vigatana, la Processó dels Armats. Processó que a partir de 1760, ja podrà treure al carrer la imatge de la Verge Dolorosa que coneixem i venerem actualment, obra escultòrica realitzada al taller vigatà dels Real.</p>
                <p>Des d’un inici, i malgrat la seva llegenda negra, la Congregació dels Dolors de Vic ha estat un espai de trobada i de confluència del poble en tot el seu espectre social, on persones riques i persones pobres s’han reunit de tu a tu. Amb una vestimenta de treball que els iguala a tots sense diferències, com és la vesta negra.</p>
                <p>Més enllà d’aquest fet, una altra marca important d’aquesta Congregació mariana, ha estat el fet de tenir un espai destacat, protagonitzat i regit únicament  per dones, com és la institució de les Sagristanes.</p>
                <p>La figura de la Sagristana pren el model de les ajudants de cambra de les grans reines de la història i, en una institució com la nostra, no hi ha reina més important que la Reina del Cel. Així que la seva tasca ha estat la de vestir a la Verge Dolorosa i mantenir l’espai en condicions i adient a la seva grandesa.</p>
                <p>Però també s’han conegut moments foscos en la història dels Dolors. Durant la Guerra Civil Espanyola (1936-1939) es va destruir el majestuós retaule barroc de 1760. D’aquella gran destrossa tant sols ha arribat fins als nostres dies un escut de la família Beuló, els 4 angelets del peu de la Mare de Déu que van ser  salvats pel fabricant de sants Clotet, i el cap de la Verge, que el va salvar, la que llavors era una nena, Lourdes Coma.</p>
                <p>Un altre moment fosc de la nostra història, va ser el període des del 1973 fins al 1981, que es va deixar de celebrar la tradicional Processó dels Armats.</p>
                <p>Però com en tot, després d’etapes fosques sempre arriben moments de lluminositat i esperança. Entre els anys 50 i 60, el taller Seguranyes va portar a terme la refeta del retaule major de l’església a imatge i semblança del del 1760, i paral·lelament també es van construir dos retaules laterals; un dedicat a Sant Ramon de Penyafort, patró dels advocats, i l’altre dedicat a Sant Cosme i Sant Damià, patrons dels metges i a Santa Apol·lònia, patrona dels dentistes.</p>
                <p>El 1970 el Dr. Junyent suggereix la compra del retaule barroc de Sant Francesc Xavier i Sant Ignasi de Loiola, que des del 2016 presideix el lateral esquerra de la nau i dialoga amb un gran quadre hiperrealista del granollerí Jordi Diaz Alamà. </p>
                <p>Recentment també s’ha sumat a tot aquest patrimoni que custodia lka nostra església la reproducció de postguerra del Sant Crist de l’Hospital de la Santa Creu, fet pel vigatà Pere Puntí. </p>
                <p>Totes aquestes joies artístiques estan embolcallades pel so de l’orgue barroc, refet el 2009, i protegit per un sostre decorat amb pintures dels germans Sala i Josep Gallés de finals del 1887. </p>
                <p>L’Església de la Mare de Déu dels Dolors de Vic és una autèntica exposició d’art, patrimoni i història que cal cuidar i preservar. </p>
            </div>

            <div className="historiaReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};