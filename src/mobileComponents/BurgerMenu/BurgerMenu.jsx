import React from 'react';
import './BurgerMenu.scss';


export default function Burger({ isOpened, closeBurgerMenu }) {
    const close = () => closeBurgerMenu(false);

    return isOpened ? (
        <div className="burger-menu">
            <div className="burger-menu__link-container">
                <a onClick={close} href="/#about" className="burger-menu__link">ABOUT</a>
            </div>
            <div className="burger-menu__link-container">
                <a onClick={close} href="/#music" className="burger-menu__link">МУЗЫКА</a>
            </div>
            <div className="burger-menu__link-container">
                <a onClick={close} href="/#concerts" className="burger-menu__link">КОНЦЕРТЫ</a>
            </div>
            <div className="burger-menu__link-container">
                <a onClick={close} href="/#merch" className="burger-menu__link">МЕРЧ</a>
            </div>
        </div>
    ) : (
        <div />
    );
}