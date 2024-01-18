import { Link } from 'react-router-dom';

import './Aceptacion.css';

export default function Privacidad() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="privacidad">
            <div className='linkReturn'>
            <Link to="/Informacion" onClick={scrollToTop}>Tornar a informacio</Link>
            </div>
            <h3 className='first'>AVISO LEGAL</h3>

            <p>
                En cumplimiento de los Artículos 5 y 6 establecidos en la Ley Orgánica 15/1999,
                de 13 de diciembre, de Protección de Datos de Carácter Personal, y el Reglamento
                1720/2007 de 21 de diciembre, le informamos que, al introducir sus datos personales
                en esta página web quedarán incorporados en un fichero propiedad de PASTISSERIA CASELLAS,
                S.L. con el fin de prestarle los servicios solicitados.
            </p>
            <p>
                Los datos obtenidos son los pertinentes para la finalidad por la que se han recabado y
                cumplen con la normativa vigente de protección de datos garantizando las medidas de seguridad
                y confidencialidad en el tratamiento de los mismos. Estos datos podrán ser utilizados para
                enviarle información de nuestros productos y servicios.
            </p>
            <p>
                Le informamos de la posibilidad de ejercer los derechos de acceso, rectificación, cancelación
                y oposición de sus datos ante:
            </p>

            <h4>1.DATOS IDENTIFICATIVOS</h4>
            <p>
                Responsable del Fichero:
            </p>
            <p>
                Nombre: PASTISSERIA CASELLAS, S.L.
            </p>
            <p>
                Dirección de la oficina: Plaça Catalunya, 9 Bajos
            </p>
            <p>
                CP:08670 Población: Navás
            </p>
            <p>
                Provincia: Barcelona
            </p>
            <p>
                CIF: ----
            </p>
            <p>
                Email: pastisseriacasellas@gmail.com
            </p>

            <p>
                Además, en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y de Comercio electrónico, le informa que:
            </p>
            <p>
                es una página web que tiene como objetivo establecer un canal de información, comunicación
                y servicios entre PASTISSERIA CASELLAS, S.L. y sus clientes y empleados a través de Internet.
            </p>

            <h4>2.DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h4>
            <p>
                El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición,
                compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos,
                texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o
                autorización expresa por parte de los autores. Todos los contenidos del sitio web se
                encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial,
                así como inscritos en los registros públicos correspondientes.
            </p>

            <p>
                Independientemente de la finalidad para la que fueran destinados, la reproducción total o
                parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la
                autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente
                se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
            </p>
            <p>
                Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el
                sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de
                cualquier posible controversia que pudiera suscitarse respecto a los mismos. El RESPONSABLE
                autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos
                del sitio web, y en todo caso redirigir al sitio web principal de www.pastisseriacasellas.com
            </p>
            <p>
                El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad
                intelectual e industrial, no implicando su sola mención o aparición en el sitio web la
                existencia de derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo,
                patrocinio o recomendación por parte del mismo.
            </p>
            <p>
                Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los
                derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos
                del sitio web, puede hacerlo a través del correo electrónico pastisseriacasellas@gmail.com
            </p>
            <h4>3.EXENCIÓN DE RESPONSABILIDADES</h4>
            <p>
                El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información
                publicada en su sitio web siempre que esta información haya sido manipulada o introducida
                por un tercero ajeno al mismo.
            </p>

            <p>
                Uso de Cookies<br />
                Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el
                servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas
                funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización
                del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única
                finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario.
                En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se
                utilizarán para la recogida de los mismos.
            </p>
            <p>
                Mediante el uso de cookies también es posible que el servidor donde se encuentra la web
                reconozca el navegador utilizado por el usuario con la finalidad de que la navegación sea
                más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado
                previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a
                ellos sin tener que registrarse en cada visita. También se pueden utilizar para medir la
                audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc, siendo
                en estos casos cookies prescindibles técnicamente pero beneficiosas para el usuario. Este
                sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.
            </p>
            <p>
                El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción
                de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones
                de su navegador para ampliar esta información
            </p>
            <h5>Política de enlaces</h5>
            <p>
                Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que
                el RESPONSABLE no puede controlar siempre los contenidos introducidos por los terceros en sus
                respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos.
                En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir
                a legislación nacional o internacional, la moral o el orden público, procediendo a la retirada
                inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades
                competentes el contenido en cuestión.
            </p>
            <p>
                El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título
                enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes
                sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente
                en la página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos
                11 y 16 de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad,
                colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos
                que puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros
                o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún
                contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma
                inmediata al administrador del sitio web.
            </p>
            <p>
                Este sitio web ha sido revisado y probado para que funcione correctamente. En principio,
                puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día.
                Sin embargo, el RESPONSABLE no descarta la posibilidad de que existan ciertos errores
                de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales,
                huelgas o circunstancias semejantes que hagan imposible el acceso a la página web.
            </p>
            <h5>Direcciones IP</h5>
            <p>
                Los servidores del sitio web podrán detectar de manera automática la dirección IP y
                el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado
                automáticamente a un ordenador cuando éste se conecta a Internet. Toda esta información
                es registrada en un fichero de actividad del servidor debidamente inscrito que permite
                el posterior procesamiento de los datos con el fin de obtener mediciones únicamente
                estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas
                realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
            </p>
            <h4>4.LEY APLICABLE Y JURISDICCIÓN</h4>
            <p>
                Para la resolución de todas las controversias o cuestiones relacionadas con el presente
                sitio web o de las actividades en él desarrolladas, será de aplicación la legislación
                española, a la que se someten expresamente las partes, siendo competentes para la resolución
                de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales más
                cercanos a Barcelona
            </p>

            <h3>POLÍTICA DE PRIVACIDAD</h3>
            <h4>1.INFORMACIÓN AL USUARIO</h4>
            <p>
                PASTISSERIA CASELLAS, S.L., en adelante RESPONSABLE, es el Responsable del tratamiento
                de los datos personales del Usuario y le informa que estos datos serán tratados de
                conformidad con lo dispuesto en las normativas vigentes en protección de datos personales,
                el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de las
                personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación
                de estos datos, por lo que se le facilita la siguiente información del tratamiento:
            </p>
            <p>
                Fin del tratamiento: mantener una relación comercial con el Usuario. Las operaciones previstas
                para realizar el tratamiento son:
            </p>
            <p>
                Remisión de comunicaciones comerciales publicitarias, siempre y cuando se haya autorizado
                previamente, por email, fax, SMS, MMS, comunidades sociales o cualquier otro medio
                electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales.
                Estas comunicaciones serán realizadas por el RESPONSABLE y relacionadas sobre sus productos
                y servicios, o de sus colaboradores o proveedores con los que éste haya alcanzado algún
                acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.
            </p>
            <h5>Realizar estudios estadísticos.</h5>
            <p>
                Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el
                usuario a través de cualquiera de las formas de contacto que se ponen a su disposición.
            </p>
            <p>
                Remitir el boletín de noticias de la página web.
            </p>
            <p>
                Elaboración de Perfiles: el RESPONSABLE también podrá realizar, previo consentimiento
                del Usuario, una elaboración de perfiles basada en un tratamiento automatizado, destinada
                a evaluar los aspectos personales facilitados por el Interesado con el fin de realizar un
                análisis de su perfil.
            </p>
            <p>
                Consecuencias previstas: El tratamiento de los datos no prevé ninguna consecuencia que
                pueda tener algún efecto jurídico o de algún otro modo que afecte significativamente al Interesado.
            </p>
            <p>
                Lógica empleada: Para realizar el tratamiento de los datos se usa procedimiento automatizado
                donde se filtran todos los campos con el fin de obtener un resultado que se ajuste a su perfil.
            </p>
            <p>
                Criterios de conservación de los datos: se conservarán mientras exista un interés mutuo para
                mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con
                medidas de seguridad adecuadas para garantizar la seudonimización de los datos o la destrucción
                total de los mismos.
            </p>
            <p>
                Comunicación de los datos: No se comunicarán los datos a terceros, salvo obligación legal.
            </p>

            <h5>Derechos que asisten al Usuario:</h5>

            <p>
                – Derecho a retirar el consentimiento en cualquier momento.
            </p>
            <p>
                – Derecho de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación
                u oposición al su tratamiento.
            </p>
            <p>
                – Derecho a presentar una reclamación ante la autoridad de control (agpd.es) si considera que
                el tratamiento no se ajusta a la normativa vigente.
            </p>
            <p>
                Datos de contacto para ejercer sus derechos:
            </p>
            <p>
                Dirección postal: PASTISSERIA CASELLAS, S.L.
            </p>
            <p>
                Plaça Catalunya, 9 Baixos. (08670)Navás
            </p>
            <p>
                Email: pastisseriacasellas@gmail.com
            </p>

            <h4>2.CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO</h4>
            <p>
                Los Usuarios, mediante la marcación de las casillas correspondientes y entrada de datos
                en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en
                formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos
                son necesarios para atender su petición, por parte del prestador, siendo voluntaria la
                inclusión de datos en los campos restantes. El Usuario garantiza que los datos personales
                facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier
                modificación de los mismos.
            </p>
            <p>
                El RESPONSABLE informa y garantiza expresamente a los usuarios que sus datos personales
                no serán cedidos en ningún caso a terceros, y que siempre que realizara algún tipo de
                cesión de datos personales, se pedirá previamente el consentimiento expreso, informado
                e inequívoco por parte los Usuarios. Todos los datos solicitados a través del sitio web
                son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al Usuario.
                En caso de que no sean facilitados todos los datos, no se garantiza que la información y
                servicios facilitados sean completamente ajustados a sus necesidades.
            </p>
            <h4>3.MEDIDAS DE SEGURIDAD</h4>
            <p>
                Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos
                personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas
                GDPR para el tratamiento de los datos personales de su responsabilidad, y manifiestamente
                con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de
                manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes
                y limitados a lo necesario en relación con los fines para los que son tratados.
            </p>
            <p>
                El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas
                apropiadas para aplicar las medidas de seguridad que establecen el GDPR con el fin de
                proteger los derechos y libertades de los Usuarios y les ha comunicado la información
                adecuada para que puedan ejercerlos.
            </p>
            <h4>4.LEY APLICABLE Y JURISDICCIÓN</h4>
            <p>
                Para la resolución de todas las controversias o cuestiones relacionadas con el presente
                sitio web o de las actividades en él desarrolladas, será de aplicación la legislación
                española, a la que se someten expresamente las partes, siendo competentes para la
                resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y
                Tribunales más cercanos a Barcelona
            </p>
            <h5>
                Information regarding online dispute resolution pursuant to Art. 14 Para. 1 of the ODR
                (Online Dispute Resolution Regulation):
            </h5>
            <p className='lastP'>
                The European Commission gives consumers the opportunity to resolve online disputes
                pursuant to Art. 14 Para. 1 of the ODR on one of their platforms. The platform
                (http://ec.europa.eu/consumers/odr) serves as a site where consumers can try to
                reach out-of-court settlements of disputes arising from online purchases and contracts
                for services
            </p>
            <div className='linkReturn'>
            <Link to="/Informacion" onClick={scrollToTop}>Tornar a informacio</Link>
            </div>
        </div>
    );
}