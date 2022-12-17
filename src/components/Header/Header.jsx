import React, { useState } from 'react';
import RamilLogo from './RamilLogo/RamilLogo';
import Navigation from './Navigation/Navigation';
import Socials from './Socials/Socials';
import './Header.scss';


export default function Header() {
    const [burgerVisible, setBurgerVisible] = useState(false);

    const changeBurgerVisibility = () => {
        setBurgerVisible(prev => !prev);
    };


    return (
        <header className="header-general-info">
            <RamilLogo />
            
            <Navigation />
            <Socials />
        </header>
    );
}