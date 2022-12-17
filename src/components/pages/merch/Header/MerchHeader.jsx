import React from 'react';
import Navigation from '../../../Header/Navigation/Navigation';
import RamilLogo from '../../../Header/RamilLogo/RamilLogo';
import Stock from './Stock/Stock';
import './MerchHeader.scss';


export default function MerchHeader({getCartTotal}) {
    return (
        <header className="header-merch-info">
            <RamilLogo />
            <Navigation />
            <Stock getCartTotal={getCartTotal} />
        </header>
    );
}