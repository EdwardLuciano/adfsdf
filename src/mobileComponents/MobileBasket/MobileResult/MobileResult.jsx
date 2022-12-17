import React from 'react';
import './MobileResult.scss';
import { useNavigate } from "react-router-dom";

export default function MobileResultn({getTotalSum}){
    let navigate = useNavigate();

    function goPay() {
        navigate('/payment');
    }
    return(
        <div className="mobile__result__container">
                <div className='mobile__result__count__container'>
                    <p className='mobile__result__count-text'>Общий итог</p>
                    <p className='mobile__result__count-text'>{getTotalSum}₽</p>
                </div>
                <button className='mobile__result__button'><p className='mobile__result__button-text' onClick={() => goPay()}> Оформить заказ</p></button>
        </div>
    );

}