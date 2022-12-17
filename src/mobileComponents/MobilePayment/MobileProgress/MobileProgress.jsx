import React from 'react';
import './MobileProgress.scss';


export default function MobileProgress(){
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
        <div className="progress__container">
            <div className='progress__stage'>
                <div className='progress__stage-step completed'><p className='progress__stage-step-number'>1</p></div>
                <hr className='progress__stage-line'></hr>
                <div className={'progress__stage-step ' + activeStage(window.location.pathname, '/payment')}><p className='progress__stage-step-number'>2</p></div>
                <hr className='progress__stage-line'></hr>
                <div className={'progress__stage-step ' + activeStage(window.location.pathname, '/order')}><p className='progress__stage-step-number'>3</p></div>
                <hr className='progress__stage-line'></hr>
                <div className={'progress__stage-step ' + activeStage(window.location.pathname, '/endofpayment')}><p className='progress__stage-step-number'>4</p></div>

            </div>
        </div>
    );

}