import React, { useEffect, useState } from 'react';
import './MobileInput.scss';
import { useNavigate } from "react-router-dom";



export default function MobileInputOrder({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){

    let navigate = useNavigate();

    window.addEventListener('lastStepOfPay',function(e) { 
        setCheckoutData(JSON.parse(localStorage.getItem('checkoutData'))); 
        navigate('/endofpayment', { replace: false });
    });

    return(
        <>
            <p className='input-title'>Выберите вариант доставки</p>
            <div id="saferoute-cart-widget" class="safeRouteMobile"></div>
        </>
    );

}