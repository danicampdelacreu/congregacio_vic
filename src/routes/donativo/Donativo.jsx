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
                <div className='donativoTitul'>
                    <h2>AJUDA AL PATRIMONI</h2>
                </div>

                <p>Mantenir el patrimoni i oferir-lo a qui el necessiti és una de les nostres raons de ser.</p>
                <p>Conservar el que ens han llegat hauria de ser un deure per a qualsevol, com ho és per a la nostra Congregació. </p>
                <p>L’església dels Dolors és un espai obert a tothom i un refugi per a totes aquelles persones que s’hi volen acostar, ja sigui per una aproximació des de la fe o des d’una vessant més patrimonialísitca.</p>
                <p>Però els costos per tirar endavant són elevats i qualsevol mena d’ajuda és bona, important i agraïda. </p>
                <p>És per aquest motiu que convidem a qui hagi arribat fins aquí a fer un donatiu per seguir mantenint viu aquest llegat patrimonial i artístic de la nostra Congregació.</p>
                <p>Destinem tots aquests donatius al manteniment i conservació de l’església barroca i de tots els elements artístics que acull i custodia. Però més enllà d’aquest aspecte purament material, també necessitem recursos per poder seguir organitzant actes i esdeveniments com ara la nostra tradicional Processó dels Armats o del Silenci, que amb 275 anys des de la seva institució, és la màxima expressió pietosa barroca que es pot observar avui en dia als carrers d’Europa, amb unes formes inalterades durant generacions i també per seguir omplint de vida i activitats la nostra església.</p>
                <p>Com a Congregació amb vocació de servei i ajuda social, organitzem diversos actes de caire cultural, com ara visites guiades, representacions i concerts; on es agrada donar protagonisme al nostre orgue barroc a través de joves artistes de la comarca, ajudant a promocionar la seva figura i donant-los un espai únic on mostrar-se davant el públic i donar a conèixer el seu talent.</p>
                <p>Les aportacions es poden fer de diferents maneres:</p>
                <p>- A través de la visita guiada a l'església.</p>
                <p>- Al lampadari o al temporitzador que il·lumina el retaule central.</p>
                <p>- A la safata durant la missa dels dissabtes.</p>
                <p>- A les caixetes d’almoines. </p>
                <p style={{ textAlign: 'left' }}>- Al nostre compte corrent : ES8201823507480201552875 .</p>

            </div>

            <div className="donativoReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    );
};