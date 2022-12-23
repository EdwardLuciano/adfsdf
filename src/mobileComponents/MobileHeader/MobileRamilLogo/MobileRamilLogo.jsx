import React from 'react';
import './MobileRamilLogo.scss';
import { useNavigate } from "react-router-dom";


export default function RamilLogo() {

        let navigate = useNavigate();

    return (
        <div className="mobile-header-general-info__logo" onClick={event => navigate('/', { replace: false })}>
            <p className="mobile-header-general-info__logo-text">RAMIL'</p>
        </div>
    );
}