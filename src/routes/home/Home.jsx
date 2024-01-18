import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"

export default function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main class='allMain'>
            <div class='homeHistoria'>
                <h3>Historia</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti repudiandae facilis consequuntur consectetur mollitia voluptatem cupiditate atque quaerat sequi necessitatibus magni voluptatum facere reprehenderit soluta nemo, tenetur quo aspernatur.</p>
                <Link to="/Historia" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeNoticias'>
                <h3>Noticies</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore voluptates enim, voluptatem laborum suscipit, quia recusandae, accusantium nesciunt maiores a facilis. Dolore esse, minima ut aperiam quae tempore quibusdam.</p>
                <Link to="/Noticias" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeGaleria'>
                <h3>Galeria</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id doloremque dolor fugiat quidem reiciendis pariatur numquam esse molestias tempore, voluptate, itaque quas alias omnis, sit debitis repellat quam dolorem.</p>
                <Link to="/Galeria" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeInformacion'>
                <h3>Informacio General</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ratione accusamus possimus sapiente assumenda? Eligendi accusamus atque tempora inventore cumque dolor, mollitia nemo quo sint. Mollitia aliquid magnam corporis hic.</p>
                <Link to="/Informacion" onClick={scrollToTop}>Anar</Link>
            </div>

            <div class='homeDonativo'>
                <h3>Fes un donatiu</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem, quasi, cum nobis reiciendis vitae corporis omnis nemo nisi consequatur fugit iste hic natus incidunt eos atque aperiam veritatis magnam.</p>
                <Link to="/Donativo" onClick={scrollToTop}>Anar</Link>
            </div>
        </main>
    );
};