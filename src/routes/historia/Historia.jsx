import { Link } from 'react-router-dom';

import "./Historia.css"

export default function Historia() {
    return (
        <div className='historiaGeneral'>
            <div className='historiaFoto'>
                <p>foto historia</p>
            </div>
            <div className='historiaExpli'>
                <h2>Historia</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias aliquam aut eligendi iure officia numquam vel voluptas? Sed ad corrupti est, in assumenda nemo mollitia facere cupiditate ex eveniet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint cupiditate ratione quos consequuntur deserunt atque, quae vitae labore ea unde. Illo eius atque nisi laudantium et nemo saepe possimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex ad perferendis enim facere nostrum excepturi aliquid consequatur nihil quae placeat quam voluptatum praesentium ea, pariatur soluta ipsa ratione dolores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit nemo vitae, fugiat tempora quod quasi perspiciatis molestiae officia accusamus dolores, esse quia, qui ea! Aliquid, veniam officiis. Dignissimos, libero.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consectetur sapiente esse adipisci commodi exercitationem tempore, error eos ea excepturi numquam itaque! Commodi aut velit aperiam ratione, inventore laudantium illo.
                </p>
            </div>
            <div className="historiaReturn">
                <Link to="/">Inici</Link>
            </div>
        </div>
    );
};