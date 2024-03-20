import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import "./Informacion.css"

export default function Informacion() {

    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const form = useRef();
    const informacionMensajeRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        if (formData.get('user_name') && formData.get('user_email') && formData.get('message') && checkboxChecked) {
            emailjs
                .sendForm('service_hanmef7', 'template_8qowx82', form.current, 'ybVHXbi9wadjWsNQj')
                // agregar correo cliente en emailjs cuando lo tengamos y cambiar service, tempalte y form.current
                .then(
                    (result) => {
                        console.log(result.text);
                        alert('¡Mensaje enviado correctamente! Nos pondremos en contacto con usted ');
                        window.location.reload();
                    },
                    (error) => {
                        console.log(error.text);
                        alert('Ocurrió un error al enviar el mensaje. Inténtalo nuevamente más tarde.');
                    }
                );
        } else {
            alert('Por favor, rellena todos los campos y/o acepta la politica de privacidad');
        }
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const scrollToInformacionMensaje = () => {
        // Hacer scroll hacia el elemento informacionMensaje
        informacionMensajeRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const returnClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='informacionGeneral'>

            <div className='informacionFoto'></div>

            <div className='informacionUnete'>
                <h2>Unir-te</h2>
                <p>Fer-te congregant amb nosaltres</p>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToInformacionMensaje(); }}>+ Info </a>
            </div>

            <div className='informacionOtras'>
                <h2> Més info</h2>
                <p>fer-te amic dels dolors</p>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToInformacionMensaje(); }}>+ Info</a>
            </div>

            <div className='informacionDonativo'>
                <h2>Ajuda</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, voluptate reiciendis animi obcaecati quos veritatis ipsum atque a optio dolore at harum rerum deleniti tempore iusto numquam blanditiis repudiandae esse? lorem </p>
                <Link to="/Donativo" onClick={scrollToTop}>+ Info</Link>
            </div>

            <div className="informacionMensaje" ref={informacionMensajeRef}>
                <p> Info: congregaciodolorsvic@gmail.com</p>
                <form ref={form} onSubmit={sendEmail}>

                    <div className="contacto-name">
                        <input type="text" name="user_name" placeholder='Nom' />
                    </div>

                    <div className="contacto-email">

                        <input type="email" name="user_email" placeholder='Email' />
                    </div>

                    <div className="contacto-message">
                        <textarea name="message" placeholder='Missatge' />
                    </div>

                    <div className="checkbox">
                        <label className='check'>
                            <input type="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} />
                            <Link to="/Aceptacion" onClick={scrollToTop}>
                                Política de privacidad y Aviso legal
                            </Link>
                            <br />
                            <Link to="/faqs" onClick={scrollToTop}>
                                Preguntas frecuentes y política de cookies
                            </Link>
                        </label>
                    </div>

                    <div className="contacto-submit">
                        <input type="submit" value="Enviar" />
                    </div>

                </form>

            </div>

            <div className="informacionReturn">
                <Link to="/" onClick={returnClick}>
                    Inici
                </Link>
            </div>

        </div>
    )
};