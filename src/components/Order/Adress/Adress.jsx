import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Adress.scss';
import { useNavigate } from "react-router-dom";


export default function Adress({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){

    let navigate = useNavigate();

    window.addEventListener('lastStepOfPay',function(e) { 
        setCheckoutData(JSON.parse(localStorage.getItem('checkoutData'))); 
        navigate('/endofpayment', { replace: false });
    });

    return(
        <div id="saferoute-cart-widget"></div>
    );


}