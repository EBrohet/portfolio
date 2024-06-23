import avatar from '../assets/avatar.webp';

import './Introduction.scss';

function Introduction() {
    return (
        <div className='intro'>
        <figure>
          <img src={avatar} alt="Avatar" />
        </figure>
        <div className='parcours'>
          <p>Bienvenue sur mon site portfolio!</p>
          <p>Intéressée par l'informatique depuis de nombreuses années, je me suis lancée dans le monde du développement, d'abord en autodidacte, puis en passant par une formation en ligne.</p>
          <p>Passionnée et motivée, je souhaite mettre à profit mes compétences front-end et back-end en contribuant à des projets innovants et continuer à apprendre sans cesse de nouvelles technologies.</p>
        </div>
        </div>
    )
}

export default Introduction;