import React from 'react';
import burger from '../../../assets/images/burger.png';
import burgerClose from '../../../assets/images/burger-close.png';
import './MobileBurgerMenu.scss';


export default function BurgerMenu({
    isOpened,
    openBurgerMenu,
    closeBurgerMenu,
}) {
    return !isOpened ? (
        <img
            src={burger}
            alt="burger-menu"
            className="mobile-header-info__burger"
            onClick={openBurgerMenu}
        />
    ) : (
        <img
            src={burgerClose}
            alt="burger-menu"
            className="mobile-header-info__burger"
            onClick={closeBurgerMenu}
        />
    );
}