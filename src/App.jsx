import './App.scss';

import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <section className='introduction'>
        <h1>Présentation</h1>
        <Introduction />
      </section>
      <hr />
      <section className='skills'>
        <h1>Compétences</h1>
        <Skills />
      </section>
      <section className='portfolio'>
        <h1>Portfolio</h1>
        <Portfolio />
      </section>
      <section className='contact'>
        <h1>Contact</h1>
        <Contact />
      </section>
    </div>
  );
}

export default App;
