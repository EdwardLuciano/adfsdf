import React, { useEffect, useState } from 'react';
import PaymentHeader from '../pages/merch/Header/MerchHeader';
import PaymentNavigation from '../Payment/Navigation/Navigation'
import Footer from '../Footer/Footer'
import Sequence from '../Payment/Sequencepayment/SequencePayment'
import Information from '../EndofPayment/Information/Information'
import { useNavigate } from "react-router-dom";


export default function OrderMain({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData}){
    console.log(checkoutData)
    let navigate = useNavigate();

    useEffect(() => {
        if(!checkoutData) {
            navigate("/payment", { replace: true });
            console.log(checkoutData)
        } else {
            if(!checkoutData.fio || !checkoutData.phone || !checkoutData.email || !checkoutData.deliveryDateSuccess) {

                navigate("/payment", { replace: true });
                    console.log(2)

            }
        }
    });

    return(
        <div className="container">
            <PaymentHeader getCartTotal={getCartTotal} />
            <PaymentNavigation />
            <Sequence />
            <Information setCheckoutData={setCheckoutData} checkoutData={checkoutData} getTotalSum={getTotalSum()}/>
            <Footer />
        </div>
    );

}