import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Adress.scss';
import { useNavigate } from "react-router-dom";


export default function Adress({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){

    let navigate = useNavigate();

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [home, setHome] = useState('');
    const [apt, setApt] = useState('');
    const [delivery, setDelivery] = useState('');

    // var popStateEvent = new PopStateEvent('popstate');
    // dispatchEvent(popStateEvent);

    // let event = new Event("popstate");
    // dispatchEvent(event);



    window.addEventListener('lastStepOfPay',function(e) { 
        setCheckoutData(JSON.parse(localStorage.getItem('checkoutData'))); 
        //console.log(checkoutData);
        navigate('/endofpayment', { replace: false });
    })


    return(

        <div id="saferoute-cart-widget"></div>

    );


}