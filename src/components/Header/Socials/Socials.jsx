import React from 'react';
import appleMusic from '../../../assets/images/Apple_music.svg';
import vk from '../../../assets/images/VK.svg';
import spotify from '../../../assets/images/Spotify.svg';
import youtube from '../../../assets/images/YouTube.svg';
import instagram from '../../../assets/images/Instagram.svg';
import facebook from '../../../assets/images/Facebook.svg';
import './Socials.scss';


export default function Socials() {
    return (
        <div className="header-general-info__social">
            <a href="https://vk.com/ramilmusic" className="header-general-info__social-link" target="_blank">
                <img src={vk} alt="VK" className="header-general-info__social-link-icon" />
            </a>  
            <a href="https://www.youtube.com/channel/UC87h5X_sXzkJRTbKAlW4q4Q" className="header-general-info__social-link" target="_blank">
                <img src={youtube} alt="Youtube" className="header-general-info__social-link-icon" />
            </a>
            <a href="https://music.apple.com/ru/artist/ramil/1450326296" className="header-general-info__social-link" target="_blank">
                <img src={appleMusic} alt="Apple Music" className="header-general-info__social-link-icon" />
            </a>              
        </div>
    );
}
