import React from 'react';
import upArrow from '../../assets/images/up-arrow.png';
import './shoppingCartIcon.scss';
import { Link } from 'react-router-dom';


export default function ScrollToTop({getCartTotal}) {
    return (
        <Link to="/basket" className="scroll-to-top shoppingCartIcon">
            <img src={upArrow} className="scroll-to-top__image" />
            <div className="shoppingCartIcon__count">{getCartTotal()}</div>
        </Link>
    );
}