import { Link } from 'react-router-dom';

import "./Espiritual.css"

export default function Espirtual() {
    return (
        <div className="espiritualGeneral">
            <div className="espiritualCelebracions">
                <h3>Celebracions</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt consectetur deleniti praesentium, expedita officia dolor, deserunt soluta labore voluptatem unde suscipit molestias autem sint adipisci, reiciendis quia nemo perspiciatis amet?</p>
            </div>
            <div className="espiritualEspais">
                <h3>Espais</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt consectetur deleniti praesentium, expedita officia dolor, deserunt soluta labore voluptatem unde suscipit molestias autem sint adipisci, reiciendis quia nemo perspiciatis amet?</p>
            </div>

            <div className="espiritualReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    )
}