import React from 'react';
import  './MobileButton.scss'


export default function MobileButton(){
    return(

        <div className="mobile__button__container">
            <button className='mobile__button__payment'><p className='mobile__button__payment-text'>Перейти к оплате</p></button>
            <button className='mobile__button__basket'><p className='mobile__button__basket-text'>Вернуться в корзину</p></button>     
        </div>
    );

}