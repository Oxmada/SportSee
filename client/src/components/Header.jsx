import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className='logo-header' />
            <nav className='nav-header'>
                <ul className="nav-list">
                    <li className="nav-item">Accueil</li>
                    <li className="nav-item">Profil</li>
                    <li className="nav-item">Réglages</li>
                    <li className="nav-item">Communauté</li>
                </ul>
            </nav>
        </header>
    );
}
export default Header