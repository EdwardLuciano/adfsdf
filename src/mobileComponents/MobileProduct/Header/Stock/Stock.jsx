import React from 'react';
import { Link } from 'react-router-dom';
import "./Stock.scss";
import StockBagCount from './StockBagCount/StockBagCount';

export default function Stock({getCartTotal}) {
    return (
        <Link to="/basket" className="header-merch-info__stock">
            <StockBagCount getCartTotal={getCartTotal}/>
            <p className="header-merch-info__stock-title">КОРЗИНА</p>
        </Link>
    );
}