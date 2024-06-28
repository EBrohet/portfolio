import './Portfolio.scss';
import data from '../assets/projects.json';
import { useState, useEffect } from 'react';

import Collapse from './Collapse';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  useEffect(() =>{
    setProjects(data)
  },[]);

    return (
      <div className='sites'>
        {projects.map(project =>
          <figure key={project.id}>
            <img src={process.env.PUBLIC_URL + project.picture} alt={project.title} className='projets' />
            <figcaption><a href={project.linkUrl}>{project.title}</a></figcaption>
            <ul>
              <Collapse project={project} />
            </ul>
          </figure>
        )}
      </div>
    )
}

export default Portfolio;