import React, { useState } from 'react';
import RamilLogo from './MobileRamilLogo/MobileRamilLogo';
import BurgerMenu from './MobileBurgerMenu/MobileBurgerMenu';
import Burger from '../BurgerMenu/BurgerMenu';
import classNames from 'classnames';
import './MobileHeader.scss';


export default function MobileHeader({ burgerOpened, setBurgerOpened }) {
    return (
        <header className="header-info">
            <div className={classNames('header', { 'burger-opened': burgerOpened })}>
                <RamilLogo />
                <BurgerMenu
                    isOpened={burgerOpened}
                    openBurgerMenu={() => {
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                        setBurgerOpened(true);

                        window.onscroll = () => {
                            window.scrollTo(scrollLeft, scrollTop);
                        }
                    }}
                    closeBurgerMenu={() => {
                        setBurgerOpened(false);
                        
                        window.onscroll = () => {};
                    }}
                />
            </div>
            <Burger
                isOpened={burgerOpened}
                closeBurgerMenu={() => {
                    setBurgerOpened(false);

                    window.onscroll = () => {};
                }}
            />
        </header>
    );
}