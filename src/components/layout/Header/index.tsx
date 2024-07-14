import { FC } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header: FC = () => {
    return (
        <header className="header no-print">
            <div className="header-head">
                <div className="header-logo-box">
                    <img className="header-logo"
                         src="/layout/images/logo-main.svg"
                         alt="Логотип Міністерства охорони здоров'я України"
                         width="115" height="64"
                    />
                    <span className="header-logo-info">
                        демонстраційний сайт
                    </span>
                </div>
                <h1 className="header-moto">Ресурс з автоматичного розшифрування рентген, КТ, МРТ, УЗД знімків</h1>
            </div>
            <nav className="header-menu">
                <ul className="header-menu-list">
                    <li className="header-menu-item">
                        <Link to="/" className="header-menu-link is-current">Головна</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link to="/rentgen" className="header-menu-link">Рентген</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link to="/kt" className="header-menu-link">KT</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link to="/mrt" className="header-menu-link">МРТ</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link to="/uzd" className="header-menu-link">УЗД</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;