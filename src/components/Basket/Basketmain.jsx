import React from 'react';
import PaymentHeader from '../pages/merch/Header/MerchHeader';
import PaymentNavigation from '../Payment/Navigation/Navigation'
import Footer from '../Footer/Footer'
import Grid from '../Basket/Grid/Grid'
import Summury from '../Basket/Summury/Summury'

export default function BasketMain({ setCart, cart, getCartTotal, getTotalSum, removeFromCart }){
    return(
        <div className="container">
            <PaymentHeader getCartTotal={getCartTotal}/>
            <PaymentNavigation />
            <Grid cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
            <Summury  getTotalSum={getTotalSum}/>
            <Footer />
        </div>
    );

}