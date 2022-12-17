import React from 'react';
import PaymentHeader from '../pages/merch/Header/MerchHeader';
import PaymentNavigation from '../Payment/Navigation/Navigation'
import PaymentSequence from '../Payment/Sequencepayment/SequencePayment'
import PaymentInput from '../Payment/Input/PaymentInput'
import Footer from '../Footer/Footer'

export default function PaymentMain({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){
    return(
        <div className="container">
            <PaymentHeader getCartTotal={getCartTotal} />
            <PaymentNavigation />
            <PaymentSequence/>
            <PaymentInput setCheckoutData={setCheckoutData} checkoutData={checkoutData} cart={cart} setCart={setCart}/>
            <Footer />
        </div>
    );

}


