import './Portfolio.scss';

import kasa from '../assets/kasa_accueil.png';
import grimoire from '../assets/grimoire_accueil.png';

function Portfolio() {
    return (
        <div className='sites'>
          <figure>
            <img src={kasa} alt="site Kasa" className='projets' />
            <figcaption>Site Kasa de location immobilière en React</figcaption>
          </figure>
          <figure>
            <img src={grimoire} alt="site Mon Vieux Grimoire" className='projets' />
            <figcaption>site Mon Vieux Grimoire de notation de livres en Node.js</figcaption>
          </figure>
        </div>
    )
}

export default Portfolio;