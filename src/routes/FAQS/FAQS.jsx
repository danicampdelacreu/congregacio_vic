import { Link } from 'react-router-dom';

import './FAQS.css'

export default function FAQS() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="faqsGeneral">
            <h3 className='first'>FAQS & COOKIES</h3>

            <h4 className='first'>Preguntas Generales:</h4>
            <h5>1. ¿Dónde se encuentra ubicada la Congregació de la Mare de Deu dels Dolors?</h5>
            <p>C/ dels Dolors nº5 de Vic </p>
            <h5>2. ¿Cuáles son los horarios?</h5>
            <p>Ponte en contacto via e-mail a: congregaciodolorsvic@gmail.com, para poder facilitar esta informacion</p>
            <h5>3. ¿Cuáles son las opciones de donativo disponibles?</h5>
            <p>El pago sera en el mismo establecimento en efectivo o transferencia. </p>
            <h5>4.¿Quien puede participar e ayudar en eventos o actos de la congregacion? </h5>
            <p>Esta abierto a toda persona que quiera participar o ayudar</p>
            <h5>5. ¿Como me pongo en contacto para hacer un donativo?</h5>
            <p>Via e-mail a: congregaciodolorsvic@gmail.com y te reponderemos a cualquier duda que tengas</p>

            
            

            <h4 className='first'>Sobre el Formulario de Contacto:</h4>
            <h5>6. ¿Cómo puedo contactar a Congregació de la Mare de Deu dels Dolors a través del formulario de contacto?</h5>
            <p>Tienes nuestro formulario de contacto en el enlace de informacion</p>
            <h5>7. ¿Cuál es el tiempo de respuesta típico para las consultas enviadas a través del formulario?</h5>
            <p>Se responderan en un maximo de 7 dias</p>
            <h5>8. ¿Puedo solicitar información adicional o aclaraciones a través del formulario?</h5>
            <p>Siempre que tenga alguna duda sobre nosotros podra pedirnos informacion y estaremos contentos de poder darles la solucion</p>

            <h4 className='first'>Información de Contacto:</h4>
            <h5>9. ¿Cuál es la dirección de correo electrónico de contacto de Congració del Dolors de Vic?</h5>
            <p>congregaciodolorsvic@gmail.com</p>
            <h5>10. ¿Tienen perfiles en redes sociales donde pueda seguir sus últimas novedades?</h5>
            <p>Tambien tenemos instagram, el cual lo tienes en el pie de esta misma pagina</p>

            <h3 className='first'>Política de Cookies - Congregació de la Mare de Deu dels Dolors</h3>

            <p className='first'><strong>Última actualización:</strong> [20 de Marzo de 2024]</p>

            <h4 className='first'>1. Introducción</h4>
            <p>Esta Política de Cookies describe cómo Venerable Congregació de la Mare de Deu dels Dolors utiliza cookies y tecnologías similares para recopilar y almacenar información cuando visitas nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes gestionar tus preferencias de cookies.</p>

            <h4>2. ¿Qué son las cookies?</h4>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, teléfono móvil o tablet) cuando visitas un sitio web. Estas cookies pueden contener información sobre tu actividad en el sitio web y se utilizan para recordar ciertas preferencias y mejorar tu experiencia de navegación.</p>

            <h4>3. ¿Cómo utilizamos las cookies?</h4>
            <p>En Congregació de la Mare de Deu dels Dolors, utilizamos cookies con los siguientes propósitos:</p>

            <p><strong>Cookies esenciales:</strong> Estas cookies son necesarias para el funcionamiento básico del sitio web y te permiten navegar por el sitio y utilizar sus funciones esenciales. No recopilan información personal.</p>

            <p><strong>Cookies de rendimiento:</strong> Utilizamos cookies de terceros, como Google Analytics, para recopilar información sobre cómo los visitantes utilizan nuestro sitio web. Esta información se utiliza para mejorar el rendimiento y la experiencia del usuario.</p>

            <p><strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio web recuerde las preferencias del usuario, como el idioma y la región, para proporcionar una experiencia más personalizada.</p>

            <p><strong>Cookies de publicidad:</strong> Podemos utilizar cookies de publicidad de terceros para mostrar anuncios relevantes a los visitantes. Estas cookies pueden rastrear la navegación del usuario en línea y se utilizan para ofrecer publicidad dirigida.</p>

            <h4>4. Gestión de cookies</h4>
            <p>Puedes controlar y gestionar tus preferencias de cookies en cualquier momento. La mayoría de los navegadores web te permiten aceptar, rechazar o eliminar cookies. Consulta la configuración de tu navegador para obtener información sobre cómo hacerlo.</p>

            <h4>5. Cambios en nuestra política de cookies</h4>
            <p>Nos reservamos el derecho de actualizar o modificar esta Política de Cookies en cualquier momento. Cualquier cambio significativo se comunicará en nuestro sitio web. La fecha de la última actualización se encuentra en la parte superior de esta política.</p>

            <h4>6. Contacto</h4>
            <p className='lastP'>Si tienes alguna pregunta o inquietud sobre nuestra política de cookies, por favor, contáctanos a través de congregaciodolorsvic@gmail.com.</p>
            <div className='linkReturn'>
            <Link to="/Informacion" onClick={scrollToTop}>Return</Link>
            </div>
        </div>
    );
}