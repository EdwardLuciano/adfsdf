import React, { useEffect, useState } from 'react';
import './Integration.scss';
import dolymi from '../../assets/images/Branding badge white.svg';

export default function Integration({ setCart, cart, getCartTotal }) {


    return (
            <div className='integration___main'>
                <p className='integration__text'>Купи сейчас, плати потом. <a className='integration_link' href=''>Подробнее</a></p>
                <img src = {dolymi} alt="" className='integration__img'/>
            </div>

        );
    }