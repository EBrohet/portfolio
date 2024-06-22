import './Skills.scss';
import skills from '../assets/skills.json';

function Skills() {
    return (
        <div className="banner">
            {skills.map(({id, title, picture}) =>
                <div key={id}>
                    <i className={picture}></i>
                    <p className='name'>{title}</p>
                </div>
        )}    
        </div>
    )
}

export default Skills;