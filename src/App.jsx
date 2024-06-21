import './App.scss';
import avatar from './assets/avatar.jpg'

function App() {
  return (
    <div className="app">
      <section className='introduction'>
        <h1>Présentation</h1>
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
      </section>
      <section className='portfolio'>
        <h1>Portfolio</h1>
        <div>
          <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default App;
