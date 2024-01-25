import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import "./Informacion.css"

export default function Informacion() {

    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        if (formData.get('user_name') && formData.get('user_email') && formData.get('message') && checkboxChecked) {
            emailjs
                .sendForm('service_sjyf30z', 'template_itkkk5i', form.current, 'ybVHXbi9wadjWsNQj')
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
            alert('Por favor, rellena todos los campos y acepta la politica de privacidad');
        }
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='informacionGeneral'>
            <div className='informacioFoto'>
                <p>logo congrecacio</p>
            </div>

            <div className='informacionDonativo'>
                <h2>DONATIU</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus iure culpa aspernatur cupiditate quaerat, rerum eius odio animi perspiciatis ducimus illum placeat, atque sapiente non maxime consectetur repellendus dignissimos. </p>
                <Link to="/Donativo" onClick={scrollToTop}>Anar</Link>
            </div>

            <div className='informacionUnete'>
                <h2>UNIR-TE</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, inventore iure? Officia, assumenda veritatis cum sit debitis sunt, qui nesciunt natus, sed quae explicabo obcaecati nihil excepturi ipsam. Accusantium, in.</p>
            </div>

            <div className='informacionOtras'>
                <h2> MES INFO</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quo enim voluptatem sunt in repellendus eum debitis, iusto accusantium adipisci asperiores deleniti voluptas similique. Aperiam totam similique veritatis itaque voluptates!</p>
            </div>

            <div className="informacionMensaje">
                <p> Info: congregacioVic@gmail.com</p>
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
                <Link to="/">Inici</Link>
            </div>
        </div>
    )
};