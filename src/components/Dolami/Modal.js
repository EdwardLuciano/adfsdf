import React from "react";
import './Dolymi.scss';
import vector from '../../assets/images/Vector.png';

function Modal(props) {
    const { show, closeModal } = props;
  
    return (
      
        <div className={show ? "modal" : "hide"}>
          <button onClick={closeModal}>X</button>
          <div className='dolymi__main'> 
            <div className='dolymi__main_header'></div>

            <div className='dolymi__main__info'>
                <p className='dolymi__main__text'>Оплатите 25% от стоимости покупки</p>
                <p className='dolymi__main__text_cursiv'>Оставшиеся 3 части спишутся автоматически с шагом в две недели</p>
            </div>

            <div className='dolymi__main__payment'>
                <div className='dolymi__main__payment_bez_proc'>
                    <img src = {vector} alt="" />
                    <p className='dolymi__main__payment_bez_proc_text'>Без процентов и комиссий</p>
                </div>

                <div className='dolymi__main__payment_card'>
                    <img src= {vector} alt="" />
                    <p className='dolymi__main__payment_card_text'>Как обычная оплата картой</p>
                </div>
            </div>
            
            <div className='dolymi__main_doly'>
                <div className='dolymi__main_doly__info'>

                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Оплата сегодня</p>
                        <p>2040 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    
                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Через 2 недели</p>
                        <p>2040 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Через 4 недели</p>
                        <p>2040 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Через 6 недель</p>
                        <p>2040 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                </div>
            </div>

            <div className="dolymi__main__footer">
                <p className = "dolymi__main__footer__text">Подробнее о сервисе можно узнать на <span className = "dolymi__main__footer__text__link" >dolyame.ru</span></p>
            </div>        
        
        </div>

        </div>
      
    );
  }
  
  export default Modal;