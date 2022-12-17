import React from 'react';
import './SequencePayment.scss'

export default function SequencePayment(){
    function activeStage(url, stage) {

        function getKeyByValue(object, value) {
          return Object.keys(object).find(key => object[key] === value);
        }

        const stages = 
                    {
                        1: '/payment',
                        2: '/order',
                        3: '/endofpayment'
                    }

        if(url == stage) {
            return 'active';
        } 

        if(getKeyByValue(stages, stage) < getKeyByValue(stages, url)) {
            return 'completed';
        } else {
            return '';
        }
  

    } 
    return(
        <div className='payment-sequence__main'>
            <div className="payment-sequence completed">
                <p className="payment-sequence__step">Выберите товар</p>
                <hr className='payment-sequence__line'></hr>
            </div>
            <div className={"payment-sequence " + activeStage(window.location.pathname, '/payment')}>
                <p className="payment-sequence__step-information">Заполните данные</p>
                <hr className='payment-sequence__line'></hr>
            </div>
            <div className={"payment-sequence " + activeStage(window.location.pathname, '/order')}>
                <p className="payment-sequence__step-adress">Укажите адрес доставки</p>
                <hr className='payment-sequence__line'></hr>
            </div>
            <div className={"payment-sequence " + activeStage(window.location.pathname, '/endofpayment')}>
                <p className="payment-sequence__step">Оплатите</p>
                <hr className='payment-sequence__line'></hr>
            </div>
        
    </div>
    );

}