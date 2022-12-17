import React from 'react';
import { Link } from 'react-router-dom';
import './Information.scss'

export default function Information({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData}){
    return(
        <div className='information__container'>
            <p className='information__text'>Спасибо что оформили заказ!</p>
            <p className='information__text'>Теперь осталось только оплатить его</p>
            <p className='information__text-count'> ИТОГОВАЯ СУММА: {getTotalSum}₽</p>
            <button className='information__button'>
                <p className='information__button-text'>Перейти к оплате</p>
            </button>
            <Link to='/basket' className='information__link'>Вернуться в корзину</Link>
        </div>
    );
}