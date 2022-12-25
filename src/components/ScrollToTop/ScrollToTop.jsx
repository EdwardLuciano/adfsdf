import React from 'react';
import upArrow from '../../assets/images/up-arrow.png';
import './shoppingCartIcon.scss';
import { Link } from 'react-router-dom';


export default function ScrollToTop({getCartTotal, cart}) {

    // <div key={idx} className={'SizesSelect__size'+((size == selectedSize) ? ' selected' : '')} onClick={event => setSelectedSize(size)}></div>

    console.log(cart);
    console.log(cart.length);

    return (
        <Link to="/basket" className={'scroll-to-top shoppingCartIcon' + ((cart.length == 0) ? ' null_length' : '')}>
            <img src={upArrow} className="scroll-to-top__image" />
            <div className="shoppingCartIcon__count">{getCartTotal()}</div>
        </Link>
        
    );

}