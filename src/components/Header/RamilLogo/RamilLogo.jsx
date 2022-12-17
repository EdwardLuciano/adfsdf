import React from 'react';
import { Link } from 'react-router-dom';
import './RamilLogo.scss';


export default function RamilLogo() {
    return (
        <div className="header-general-info__logo">
            <Link to="/" className="header-general-info__logo-text">RAMIL'</Link>
        </div>
    );
}
