import React from 'react';
import Progress from './MobileProgress/MobileProgress'
import Input from './MobileInput/MobileInput'
import Button from './MobileButton/MobileButton';
import HeaderWithStock from '../MobileHeaderWithStock/MobileHeaderWithStock';

export default function MobilePaymentMain({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){

    return(
        <div className="container">
            <HeaderWithStock getCartTotal={getCartTotal}/>
            <h2 className="container__title">ВАШИ ЗАКАЗЫ</h2>
            <Progress/>
            <Input card={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} setCheckoutData={setCheckoutData} checkoutData={checkoutData} stageCheckout={stageCheckout} setStageCheckout={setStageCheckout} />
        </div>
    );

}