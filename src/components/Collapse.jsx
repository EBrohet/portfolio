import './Collapse.scss';
import arrow from '../assets/arrow.png';

import { useState } from 'react';

function Open({title, message}) {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleClick() {
        isOpen ? (setIsOpen(false)
    ) : (setIsOpen(true));
    }

    return (
        <div className={isOpen ? 'list show' : 'list'}>
            <p className='title' onClick={handleClick}>
                {title}
                <img className={isOpen ? 'btn rotate' : 'btn'} src={arrow} alt='flèche' onClick={handleClick} />
            </p>
            <div className={isOpen ? 'toggle open' : 'toggle'}>
                <p className={isOpen ? 'message visible' : 'message'}>{message}</p>
            </div>
        </div>   
    )
}

function Collapse({project}) {

    return (
        <div className='collapse'>
            <Open
                title='Voir plus'
                message={project.tech.map((name, index) => (
                    <li key={index} className='tech'>{name}</li>
                ))}>
            </Open>
        </div>
    )
}

export default Collapse;