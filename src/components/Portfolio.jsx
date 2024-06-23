import './Portfolio.scss';
import data from '../assets/projects.json';
import { useState, useEffect } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  useEffect(() =>{
    setProjects(data)
  },[]);

    return (
      <div className='sites'>
        {projects.map(project =>
          <figure key={project.id}>
            <img src={project.picture} alt={project.title} className='projets' />
            <figcaption><a href={project.linkUrl}>{project.title}</a></figcaption>
            <ul>
              {project.tech.map((name, index) => (
                <li key={index} className='tech'>{name}</li>
              ))}
            </ul>
          </figure>
        )}
      </div>
    )
}

export default Portfolio;