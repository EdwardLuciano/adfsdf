import React from 'react';
import AboutHeader from './AboutHeader/AboutHeader';
import aboutBackground from '../../assets/images/about_background.png';
import './About.scss';


export default function About() {
    return (
        <div className="about" id="about_sec">
            <AboutHeader />
            <div className="about__container">
                <p className="about__information">
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
        </div>
    );
}