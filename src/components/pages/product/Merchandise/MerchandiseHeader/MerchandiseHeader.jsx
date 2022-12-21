import React, { useState } from 'react';
import './MerchandiseHeader.scss';
import classNames from 'classnames';
import dataSlider from './dataSlider';


export default function MerchandiseHeader() {
    const [slideIndex, setSlideIndex] = useState(1);

    const moveDot = index => setSlideIndex(index);

    return (
        <div className="merchandise-header__title"> 
            <p className="merchandise-header__title-text">Главная - Мерч</p>
            <div className="merchandise-header__slider-container">
                {dataSlider.map((item, index) => (
                    <div
                        key={item.id}
                        className={
                            classNames(
                                'merchandise-header__slide',
                                { 'active-anim': slideIndex === index + 1 },
                            )
                        }
                    >
                        <img src={item.img} alt="Slide Item" />
                    </div>
                ))}
                <p className="merchandise-header__title-text1">НОВОЕ ПОСТУПЛЕНИЕ</p>
                <ul className="merchandise-header__controllers">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <li
                            onClick={() => {
                                moveDot(index + 1);
                            }}
                            className={
                                classNames(
                                    "merchandise-header__controllers-item",
                                    { current: slideIndex === index + 1 },
                                )
                            }
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}