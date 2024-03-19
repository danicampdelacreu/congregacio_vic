import { Link } from 'react-router-dom';

import "./Espiritual.css"

export default function Espirtual() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='espiritualMain'>
            <div className="espiritualGeneral">
                <div className="espiritualCelebracions">
                    <h2>ESSPIRITUALITAT</h2>
                    <p>L’espiritualitat és un dels eixos principals de la nostra església i
                        que des dels seus inicis ha difós la devoció a Maria, sota
                        l’advocació dels Dolors, com a model i referent de tots els temps.</p>
                    <p>Una dona forta, valenta, lluitadora i perseverant. Exemple de
                        superació davant les adversitats de la vida, capaç de sobreposar-
                        se al dolor i transmetre un missatge de pau i esperança. Per això
                        hi acudim com a intercessora nostra cap a Jesús.</p>
                    <p>Les set espases que traspassen el cor i que són l’emblema que
                        ens identifica com a confraria, ens recorden set moments
                        especialment dolorosos en la vida de Maria.</p>
                    <p>1-El dia que Maria va a presentar el seu fill Jesús al temple, rep
                        amb dolor i preocupació la profecia que li fa Simeó. “ Una espasa
                        de dolor et traspassarà el teu cor. Aquest fill serà una senyera
                        combatuda i per ella, molts s’alçaran i altres cauran”.</p>
                    <p>2-La decisió d’Herodes d’ordenar la matança de tots els infants
                        menors de dos anys, obliga a Maria i Josep a fugir amb l’infant
                        cap a Egipte, fugint del perill que planava sobre ell.</p>
                    <p>3- L’angoixa de Maria per la pèrdua del seu fill a Jerusalem
                        durant tres dies. Finalment, fou trobat al temple, discutint amb
                        els doctors i mestres de la llei.</p>
                    <p>4- Fou especialment dolorós per ella, trobar-se amb el seu fill
                        camí del calvari i presenciar les injúries, vexacions i tota mena de
                        maltractaments que va rebre i les diverses caigudes a terra,
                        portant la pesada creu.</p>
                    <p>5- Un moment tràgic fou veure agonitzar i morir a Jesús executat
                        a la pena de mort més ignominiosa i cruel. La crucifixió reservada
                        als lladres i delinqüents.</p>
                    <p>6-Maria rebé en braços el cadàver del seu fill mort, ple de llagues
                        i ferides.</p>
                    <p>7- Un cop ja sepultat Jesús, Maria inicia el dol en la seva soledat.</p>
                    <p>En els nostres temps, quan fem el rés de la Corona, meditem
                        aquells dolors d’ahir i els veiem reflectits a semblança de molts
                        patiments d’avui. És un exercici espiritual que meditat amb
                        consciència plena ens pot portar a sentir-nos més solidaris i
                        empàtics amb el dolor dels altres, defugint ser-ne uns
                        espectadors insensibles i aliens .</p>

                </div>

                <div className="espiritualEspais">
                    <h2>CELEBRACIONS</h2>
                    <p></p>
                </div>
            </div>
            <div className="espiritualReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>
        </div>
    )
}