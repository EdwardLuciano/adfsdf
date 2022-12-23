import React from 'react';
import MobileGrid from './MobileGrid/MobileGrid';
import MobileResult from './MobileResult/MobileResult';
import HeaderWithStock from '../MobileHeaderWithStock/MobileHeaderWithStock';
import Footer from '../../mobileComponents/MobileFooter/MobileFooter';

export default function MobileBasketMain( {cart, setCart, getCartTotal, getTotalSum, removeFromCart} ){
    return(
        <div className="container">
            <HeaderWithStock getCartTotal={getCartTotal}/>
            <h2 className="container__title">ВАШИ ЗАКАЗЫ</h2>
            <MobileGrid cart={cart} setCart={setCart} removeFromCart={removeFromCart}/>
            <MobileResult getTotalSum={getTotalSum()}/>
                         <Footer />

        </div>
    );

}