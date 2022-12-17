import React from 'react';
import './Navigation.scss';


export default function Navigation() {
    return (
        <nav className="header-general-info__navigation">
            <a href="/#about_sec" className="header-general-info__navigation-link">ABOUT</a>
            <a href="/#music" className="header-general-info__navigation-link">МУЗЫКА</a>
            <a href="/#concerts" className="header-general-info__navigation-link">КОНЦЕРТЫ</a>
            <a href="/#merchandise" className="header-general-info__navigation-link">МЕРЧ</a>
        </nav>
    );
}
