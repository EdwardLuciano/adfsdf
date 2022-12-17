import React from 'react';
import Progress from '../MobilePayment/MobileProgress/MobileProgress'
import Wish from './MobileWish/MobileWish'
import Summury from './MobileSummury/MobileSummury'
import MobileButton from './MobileButton/MobileButton'
import HeaderWithStock from '../MobileHeaderWithStock/MobileHeaderWithStock';

export default function MobileEndOfPaymentMain(){
    return(
        <div className="endofpayment__container">
            <HeaderWithStock />
            <h2 className="container__title">ВАШИ ЗАКАЗЫ</h2>
            <Progress/>
            <Wish/>
            <Summury/>
            <MobileButton/>
        </div>
    );

}