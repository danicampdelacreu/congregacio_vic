import { Link } from 'react-router-dom';

import "./Donativo.css"

export default function Donativo() {
    return (
        <div className='donativoGeneral'>
            <div className='donativoFoto'>
                <p>logo congregacio</p>
            </div>
            <div className='donativoExpli'>
                <h2>Donatiu</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint unde officia nesciunt ad, facere, esse itaque hic rem, nisi iste illum! In et iure voluptatem doloribus sequi explicabo iusto!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore dolorem libero in unde. Odio sunt ad adipisci quis doloremque nobis placeat nemo obcaecati. Modi labore repellendus ea temporibus omnis?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae quas impedit iusto culpa ex nobis dignissimos id ipsa porro eos distinctio, nisi modi saepe tempore voluptas consequatur facilis? Ut?
                </p>
            </div>
            <div className="dontaivoReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    );
};