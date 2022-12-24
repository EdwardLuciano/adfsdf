import React, { useEffect, useState } from 'react';
import MerchandiseHeader from './MerchandiseHeader/MerchandiseHeader';
import MerchandiseList from './MerchandiseList/MerchandiseList';
import './Merchandise.scss';


export default function Merchandise({ setCart, cart, getCartTotal }) {


    return (
        <div className="merchandise" id="merchandise">
            <MerchandiseHeader cart={cart} setCart={setCart} getCartTotal={getCartTotal} />
            <MerchandiseList cart={cart} setCart={setCart} />
           {/*<div class="commingSoon">Новая коллекция мерча этой осенью!</div>*/}
            <div id="saferoute-cart-widget"></div>

        </div>

    );
}