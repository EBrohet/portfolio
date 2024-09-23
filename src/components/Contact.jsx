import './Contact.scss';
import Form from './Form';

import github from '../assets/github.png';
import linkedin from '../assets/linkedin.jpeg';

function Contact() {
    return (
        <div className="infos">
            <Form />
            <h2>Emilie Brohet</h2>
            <a href='https://github.com/EBrohet'><img src={github} alt="logo Github" className='logo' /></a>
            <a href='https://www.linkedin.com/in/emilie-brohet-878537264'><img src={linkedin} alt="logo LinkedIn" className='logo' /></a>
        </div>
    )
}

export default Contact;