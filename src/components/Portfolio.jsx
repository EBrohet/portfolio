import './Portfolio.scss';

import kasa from '../assets/kasa_accueil.png';
import grimoire from '../assets/grimoire_accueil.png';

function Portfolio() {
    return (
        <div className='sites'>
          <figure>
            <img src={kasa} alt="site Kasa" className='projets' />
            <figcaption><a href='https://github.com/EBrohet/OC_Projet-5'>Site Kasa de location immobilière en React</a></figcaption>
          </figure>
          <figure>
            <img src={grimoire} alt="site Mon Vieux Grimoire" className='projets' />
            <figcaption><a href='https://github.com/EBrohet/OC_Projet-6'>Site Mon Vieux Grimoire de notation de livres en Node.js</a></figcaption>
          </figure>
        </div>
    )
}

export default Portfolio;