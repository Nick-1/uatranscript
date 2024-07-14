import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer no-print">
            <div className="footer-content container">
                <img
                    src="/layout/images/footer-logo.svg"
                    className="footer-logo"
                    alt="Логотип Міністерства охорони здоров'я України"
                />
                <div className="footer-contacts">
                    <ul className="contacts-list">
                        <li className="contacts-list-item phone">+440003424</li>
                    </ul>
                </div>
            </div>
            <p className="footer-slogan">Сайт створений в демонстраційних цілях і не використовується для надання діагнозів.</p>
            <p className="footer-copyright">&copy; 2024 uatranscript.pro</p>
        </footer>
    );
};

export default Footer;
