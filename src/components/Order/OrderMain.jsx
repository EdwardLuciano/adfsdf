import React, { useEffect, useState } from 'react';
import PaymentHeader from '../pages/merch/Header/MerchHeader';
import PaymentNavigation from '../Payment/Navigation/Navigation'
import Footer from '../Footer/Footer'
import Sequence from '../Payment/Sequencepayment/SequencePayment'
import Adress from '../Order/Adress/Adress'
import { useNavigate } from "react-router-dom";


export default function OrderMain({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){

        let newCD = {...cart};
        console.log('Тестирование вывода через переменную');
        console.log(newCD);
            console.log(localStorage.getItem('cart')+'__order');

            console.log(localStorage.getItem('checkoutData')+'__order');

    useEffect(() => {
        var popStateEvent = new PopStateEvent('popstate');
        dispatchEvent(popStateEvent);

    });

    return(
        <div className="container">
            <PaymentHeader getCartTotal={getCartTotal} />
            <PaymentNavigation />
            <Sequence/>

            <Adress setCheckoutData={setCheckoutData} checkoutData={checkoutData} stageCheckout={stageCheckout} setStageCheckout={setStageCheckout}/>
            <Footer />
        </div>
    );

}