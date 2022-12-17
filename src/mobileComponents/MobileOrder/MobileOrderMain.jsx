import React, { useEffect, useState } from 'react';
import Progress from '../MobilePayment/MobileProgress/MobileProgress'
import InputOrder from './MobileInput/MobileInput'
import ButtonOrder from '../MobilePayment/MobileButton/MobileButton'
import HeaderWithStock from '../MobileHeaderWithStock/MobileHeaderWithStock';

export default function MobilePaymentMain({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){

    useEffect(() => {
        var popStateEvent = new PopStateEvent('popstate');
        dispatchEvent(popStateEvent);
    });

    return(
        <div className="container">
            <HeaderWithStock getCartTotal={getCartTotal}/>
            <h2 className="container__title">ВАШИ ЗАКАЗЫ</h2>
            <Progress/>
            <InputOrder/>
            
        </div>
    );
}