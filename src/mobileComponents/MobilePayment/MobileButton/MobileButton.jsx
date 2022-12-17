import React from 'react';
import './MobileButton.scss';
import { Link } from 'react-router-dom';


export default function MobileButton(){
    return(
        <div className="button__container">
            <Link to="/basket" className='button-behind'> <p className='button-behind-text'> Назад</p></Link>
            <button className='button-next'> <p className='button-next-text'> Далее</p></button>
            
        </div>
    );

}