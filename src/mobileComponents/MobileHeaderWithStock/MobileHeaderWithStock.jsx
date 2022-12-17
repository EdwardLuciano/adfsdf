import React from 'react';
import RamilLogo from '../MobileHeader/MobileRamilLogo/MobileRamilLogo';
import StockBagCount from '../../components/pages/merch/Header/Stock/StockBagCount/StockBagCount';
import './MobileHeaderWithStock.scss';


export default function HeaderWithStock({getCartTotal}) {
    return (
        <header className="mobile-header-info">
            <RamilLogo />
            <StockBagCount getCartTotal={getCartTotal}/>
        </header>
    );
}