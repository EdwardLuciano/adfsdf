import React from 'react';
import './MobileAbout.scss';
import AboutHeader from './MobileAboutHeader/MobileAboutHeader';
import mobileAbout from '../../assets/images/ramil_about.png';


function AboutInfo() {
    return (
        <div className="mobile-about__container">
            <img src={mobileAbout} alt="Ramil'" className="mobile-about__information-img" />
            <p className="mobile-about__information">
                Музыка Ramil' — это смелый и резкий поп, представляющий новейшую
                волну российской поп-музыки, которая зарождается не в дорогих студиях
                и радиостанциях, а в «сторис» инстаграма и аудиозаписях Вконтакте.
                Где прилипчивые припевы сочетаются с иногда мрачными образами в куплетах.
                <br />
                <br />
                Но Ramil' любят как раз за откровенность. Название песни «Пускай по вене
                соль» может кого-то смутить, но есть уверенность: сглаживай Ramil' углы,
                слушатели не резонировали бы с его песнями так сильно, как это
                происходит сейчас.
            </p>
        </div>
    );
}


export default function About() {
    return (
        <div id="about">
            <AboutHeader />
            <AboutInfo />
        </div>
    );
}