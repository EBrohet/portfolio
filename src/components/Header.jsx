import './Header.scss';

function Header() {
    return (
        <div className="header">
            <nav className="navbar">
                <li><a href='#introduction'>Présentation</a></li>-
                <li><a href='#skills'>Compétences</a></li>-
                <li><a href='#portfolio'>Portfolio</a></li>-
                <li><a href='#contact'>Contact</a></li>
            </nav>
        </div>
    )
}

export default Header;