import React from 'react';
import './Navigation.scss'

export default function PaymentMain(){
    return(
        <div className="container">
            <p className='PaymentNavigation__text'>Главная - Мерч - Корзина</p>
            <p className='PaymentNavigation__text-order'>Ваши заказы</p>
        </div>
    );

}