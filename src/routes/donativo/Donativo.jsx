import React from 'react';
import { Link } from 'react-router-dom';

import "./Donativo.css"

export default function Donativo() {

    const returnClick = () => {
        window.scrollTo(0, 0);
    };
   

    return (
        <div className='donativoGeneral'>

            <div className='donativoFoto'></div>

            <div className='donativoExpli'>
                <h2>AJUDA AL PATRIMONI</h2>
                <p>Conservar el que ens han llegat hauria de ser un deure per a qualsevol, com ho és per a la nostra Congregació. Mantenir el patrimoni i poder-lo oferir a qui el necessiti és una de les nostres raons.</p>
                <p>L’església dels Dolors és un refugi per a totes aquelles persones que volen acostar-s’hi, ja sigui per una aproximació des de la fe o des d’una vessant més patrimonialísitca i estem oberts a tothom.</p>
                <p>Però els costos per tirar endavant són elevats i qualsevol mena d’ajuda és bona i important.</p>
                <p>És per aquest motiu que convidem a qui hagi arribat fins aquí a fer un donatiu per la casa, que es destina a les diverses peces artístiques que té la Congregació. Manteniment i reparació de l’església barroca i el seu art, permetent que no es degradi i es pugui observar amb una qualitat superior. Igualment és una joia la nostra Processó dels Armats o del Silenci, que amb 275 anys des de la seva institució, és la màxima expressió pietosa barroca que es pot observar avui en dia als carrers d’Europa, amb unes formes inalterades durant generacions. Però som, també una Congregació viva i que vol ajudar a la societat que ens envolta avui, per aquesta raó fem diversos actes de caire cultural, com visites guiades, representacions tradicionals en la seva globalitat i concerts, on es agrada destacar el nostre orgue barroc i que encara avui ens transporta amb el seu so de l’antigor. Intentant que joves formats puguin desenvolupar les seves habilitats davant d’un públic i en un entorn únic. </p>
                <p>Les aportacions es poden fer a través de la visita a l'església al lampadari o al temporitzador que il·lumina el retaule central, perquè il·luminant el nostre barroc ens ajudes a mantenir-lo. També, aportant a la safata durant la missa dels dissabtes o a les caixetes d’almoines. Des de casa o el mòbil fent un donatiu al nostre compte corrent : ES8201823507480201552875 .</p>
            </div>

            <div className="donativoReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};