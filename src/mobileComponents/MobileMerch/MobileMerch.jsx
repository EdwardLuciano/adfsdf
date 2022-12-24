import React from 'react';
import MerchHeader from './MobileMerchHeader/MobileMerchHeader';
import './MobileMerch.scss';
import MerchList from './MobileMerchList/MobileMerchList';



export default function Merch( {cart, setCart, getCartTotal} ) {
    return (
        <div id="merch">
            <MerchHeader />
            <MerchList cart={cart} setCart={setCart} getCartTotal={getCartTotal} />
            {/*<div class="commingSoon">Новая коллекция мерча этой осенью!</div> */}
            <div id="saferoute-cart-widget"></div>

        </div>
    );
}