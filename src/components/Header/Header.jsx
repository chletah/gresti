import './Header.css'
import logo from '../../assets/Header/logo.svg'
import communicationIcon from '../../assets/Header/communication.svg'
import shareIcon from '../../assets/Header/share.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="" className="header__logo-link">
                        <img src={logo} alt="logo" className="header__logo-icon" />
                    </a>
                </div>
                <ul className="header__menu">
                    <li className="header__menu-li">Home</li>
                    <li className="header__menu-li">About us</li>
                    <li className="header__menu-li">Gallery</li>
                </ul>
                <div className="header__change-language">
                    <div className="header__change-language-btn">
                        ENG
                    </div>
                </div>
                <div className="header__communication">
                    <div className="header__communication-btn">
                        <a href="" className="header__communication-link">
                            <img src={communicationIcon} alt="communication-icon" className="header__communication-icon" />
                        </a>
                    </div>
                </div>
                <div className="header__share">
                    <div className="header__share-btn">
                        <a href="" className="header__share-link">
                            <img src={shareIcon} alt="share-icon" className="header__share-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;