import './Contact.scss'

import github from '../assets/github.png'
import linkedin from '../assets/linkedin.jpeg'

function Contact() {
    return (
        <div className="infos">
            <h2>Emilie Brohet</h2>
            <p>Tél : 06.79.72.50.42</p>
            <p>Email : emilie.brohet@gmail.com</p>
            <img src={github} alt="logo Github" className='logo' />
            <img src={linkedin} alt="" className='logo' />
        </div>
    )
}

export default Contact;