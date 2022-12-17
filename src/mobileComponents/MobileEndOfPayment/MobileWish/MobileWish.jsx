import React from 'react';
import  './MobileWish.scss'


export default function MobileWish(){
    return(

        <div className="wish__container">
            <p className='wish-text'>Спасибо, что оформили заказ!</p>
            <p className='wish-text'>Теперь осталось только</p>
            <p className='wish-text'>Оплатить его</p>
        </div>
    );

}