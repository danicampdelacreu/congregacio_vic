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
            <h5>1. ¿Dónde se encuentra ubicada la Congregracio de Vic?</h5>
            <p> DIRECCIO-------------</p>
            <h5>2. ¿Cuáles son los horarios?</h5>
            <p>DIVENDRES: 10:00-13:00 // 16:00-19:00</p>
            <p>DISSABTE i DIUMENGE: 10:00-14:00</p>
            <h5>3. ¿Ofrecen opciones de entrega a domicilio?</h5>
            <p>No se ofrece entrega a domicilio</p>
            <h5>4. ¿Qué tipos de productos y pasteles ofrecen en Pastisseria Casellas?</h5>
            <p>......</p>
            <h5>5. ¿Tienen opciones de pasteles personalizados o pedidos especiales?</h5>
            <p>En el menu se encuentra el enlace "ESPECIALS" donde estan nuestras opciones de pedidos especiales/presonalizados</p>
            <h5>6. ¿Cuáles son las opciones de pago disponibles?</h5>
            <p>El pago sera en el mismo establecimento en efectivo o tarejta </p>
            <h5>7. ¿Ofrecen opciones para personas con dietas especiales (sin gluten, sin azúcar, etc.)?</h5>
            <p>.......</p>
            <h5>8. ¿Puedo reservar productos o pasteles para eventos especiales?</h5>
            <p>Siempre que se reserve con 7 dias de antelacion</p>

            <h4 className='first'>Sobre Pedidos:</h4>
            <h5>9. ¿Cómo puedo realizar un pedido en Pastisseria Casellas?</h5>
            <p>Rellenando nuestro formulario</p>
            <h5>10. ¿Cuál es el tiempo de anticipación recomendado para hacer un pedido?</h5>
            <p>Recomendamos hacerlo con 7 dias de antelacion</p>
            <h5>11. ¿Ofrecen descuentos para pedidos grandes o eventos?</h5>
            <p>Al hacer el pedido se valoran los posibles descuentos</p>
            <h5>12. ¿Cuál es el proceso de cancelación o modificación de un pedido?</h5>
            <p>Llamando al telefono minimo 4 dias antes de la fecha de entrega </p>
            <h5>13. ¿Puedo personalizar el diseño de un pastel para una ocasión especial?</h5>
            <p>Si</p>
            <h5>14. ¿Qué opciones tienen para regalos y envoltura de regalos?</h5>
            <p>......</p>

            <h4 className='first'>Preguntas sobre Productos:</h4>
            <h5>15. ¿Cuáles son los productos más populares de Pastisseria Casellas?</h5>
            <h5>16. ¿Ofrecen opciones sin azúcar o bajas en calorías?</h5>
            <h5>17. ¿Qué productos recomiendan para bodas o eventos formales?</h5>
            <h5>18. ¿Pueden acomodar alergias alimentarias o restricciones dietéticas?</h5>
            <h5>19. ¿Tienen opciones veganas o vegetarianas?</h5>

            <h4 className='first'>Sobre el Formulario de Contacto:</h4>
            <h5>20. ¿Cómo puedo contactar a Congregracio de Vic a través del formulario de contacto?</h5>
            <p>Tienes nuestro formulario de contacto en el pie de esta misma pagina</p>
            <h5>21. ¿Cuál es el tiempo de respuesta típico para las consultas enviadas a través del formulario?</h5>
            <p>Se responderan en horario laboral maximo 48h</p>
            <h5>22. ¿Puedo solicitar información adicional o aclaraciones sobre productos a través del formulario?</h5>
            <p>Siempre que tenga alguna duda sobre nuestros productos podra pedirnos informacion y estaremos contentos de poder darles la solucion</p>
            <h5>23. ¿Cuál es la información necesaria para realizar un pedido a través del formulario?</h5>
            <p>Rellenar los 3 campos que tiene el formulario: Nombre, email y mensaje. Junto a la aceptacion de la política de privacidad</p>

            <h4 className='first'>Información de Contacto:</h4>
            <h5>24. ¿Cuál es la dirección de correo electrónico de contacto de Pastisseria Casellas?</h5>
            <p>pastisseriacasellas@gmail.com</p>
            <h5>25. ¿Cuál es el número de teléfono de contacto?</h5>
            <p>+34 621 199 127</p>
            <h5>26. ¿Tienen perfiles en redes sociales donde pueda seguir sus últimas novedades?</h5>
            <p>Estamos trabajando en ello. De momento solo tenemos la pagina web</p>

            <h3 className='first'>Política de Cookies - Congregracio de Vic</h3>

            <p className='first'><strong>Última actualización:</strong> [2 de Noviembre de 2023]</p>

            <h4 className='first'>1. Introducción</h4>
            <p>Esta Política de Cookies describe cómo Congregracio de Vic utiliza cookies y tecnologías similares para recopilar y almacenar información cuando visitas nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes gestionar tus preferencias de cookies.</p>

            <h4>2. ¿Qué son las cookies?</h4>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, teléfono móvil o tablet) cuando visitas un sitio web. Estas cookies pueden contener información sobre tu actividad en el sitio web y se utilizan para recordar ciertas preferencias y mejorar tu experiencia de navegación.</p>

            <h4>3. ¿Cómo utilizamos las cookies?</h4>
            <p>En Congregracio de Vic, utilizamos cookies con los siguientes propósitos:</p>

            <p><strong>Cookies esenciales:</strong> Estas cookies son necesarias para el funcionamiento básico del sitio web y te permiten navegar por el sitio y utilizar sus funciones esenciales. No recopilan información personal.</p>

            <p><strong>Cookies de rendimiento:</strong> Utilizamos cookies de terceros, como Google Analytics, para recopilar información sobre cómo los visitantes utilizan nuestro sitio web. Esta información se utiliza para mejorar el rendimiento y la experiencia del usuario.</p>

            <p><strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio web recuerde las preferencias del usuario, como el idioma y la región, para proporcionar una experiencia más personalizada.</p>

            <p><strong>Cookies de publicidad:</strong> Podemos utilizar cookies de publicidad de terceros para mostrar anuncios relevantes a los visitantes. Estas cookies pueden rastrear la navegación del usuario en línea y se utilizan para ofrecer publicidad dirigida.</p>

            <h4>4. Gestión de cookies</h4>
            <p>Puedes controlar y gestionar tus preferencias de cookies en cualquier momento. La mayoría de los navegadores web te permiten aceptar, rechazar o eliminar cookies. Consulta la configuración de tu navegador para obtener información sobre cómo hacerlo.</p>

            <h4>5. Cambios en nuestra política de cookies</h4>
            <p>Nos reservamos el derecho de actualizar o modificar esta Política de Cookies en cualquier momento. Cualquier cambio significativo se comunicará en nuestro sitio web. La fecha de la última actualización se encuentra en la parte superior de esta política.</p>

            <h4>6. Contacto</h4>
            <p className='lastP'>Si tienes alguna pregunta o inquietud sobre nuestra política de cookies, por favor, contáctanos a través de pastisseriacasellas@gmail.com.</p>
            <div className='linkReturn'>
            <Link to="/Informacion" onClick={scrollToTop}>Return</Link>
            </div>
        </div>
    );
}