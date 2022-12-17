import React from 'react';
import { Link } from 'react-router-dom';
import './Summury.scss';



export default function Summury({getTotalSum}) {
    


    return (
        <div className='summury__content'>
            <div className='summury__container'>
                <div className='summury__container__text'>
                    <p className='summury__text'>Общий итог: </p> 
                    <p className='summury__text'>{getTotalSum()}₽</p>
                </div>
                <Link to="/payment" className='summury__button'>
                    <p className='summury__button-text'>Перейти к оплате</p>
                </Link>
            </div>

        </div>
    );
}