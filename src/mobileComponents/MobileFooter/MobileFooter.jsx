import React from 'react';
import appleMusic from '../../assets/images/Apple_music.svg';
import vk from '../../assets/images/VK.svg';
import spotify from '../../assets/images/Spotify.svg';
import youtube from '../../assets/images/YouTube.svg';
import instagram from '../../assets/images/Instagram.svg';
import facebook from '../../assets/images/Facebook.svg';
import './MobileFooter.scss';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="mobile-footer">
            <div className="mobile-footer__social">
                <a href="https://vk.com/ramilmusic" className="mobile-footer__social-link">
                    <img src={vk} alt="VK" className="mobile-footer__social-link-icon" />
                </a>  
                <a href="https://www.youtube.com/channel/UC87h5X_sXzkJRTbKAlW4q4Q" className="mobile-footer__social-link">
                    <img src={youtube} alt="Youtube" className="mobile-footer__social-link-icon" />
                </a>
                <a href="https://music.apple.com/ru/artist/ramil/1450326296" className="mobile-footer__social-link">
                    <img src={appleMusic} alt="Apple Music" className="mobile-footer__social-link-icon" />
                </a>
            </div>
            <div className="mobile-footer__policies">
                <p className="mobile-footer__policies-item">ИП Орлов Р. А., ИНН: 525904102428</p>
                                <Link to="/privacypolicy">Пользовательское соглашение</Link><Link to="/refund">Возврат</Link>

            </div>
        </div>
    );
}