import React from 'react';
import appleMusic from '../../assets/images/Apple_music.svg';
import vk from '../../assets/images/VK.svg';
import spotify from '../../assets/images/Spotify.svg';
import youtube from '../../assets/images/YouTube.svg';
import instagram from '../../assets/images/Instagram.svg';
import facebook from '../../assets/images/Facebook.svg';
import './Footer.scss';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__social">
                <a href="https://vk.com/ramilmusic" className="footer__social-link" style={{paddingRight: '8px'}} target="_blank">
                    <img src={vk} alt="VK" className="footer__social-link-icon" style={{height: '23px', paddingTop: '1px'}}/>
                </a>    
                <a href="https://www.youtube.com/channel/UC87h5X_sXzkJRTbKAlW4q4Q" className="footer__social-link" target="_blank">
                    <img src={youtube} alt="Youtube" className="footer__social-link-icon" />
                </a>
                <a href="https://music.apple.com/ru/artist/ramil/1450326296" className="footer__social-link" style={{padding: '7px', paddingTop: '8px'}} target="_blank">
                    <img src={appleMusic} alt="Apple Music" className="footer__social-link-icon" style={{height: '29px'}} />
                </a>
            
            </div>
            <div className="">
                <p className="footer__policies-item">ИП Орлов Р. А., ИНН: 525904102428 </p>
                <Link to="/privacypolicy">Пользовательское соглашение</Link>&nbsp;&nbsp;<Link to="/refund">Возврат</Link>
            </div>
        </div>
    );
}