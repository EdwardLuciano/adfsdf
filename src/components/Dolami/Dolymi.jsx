import React, { useEffect, useState } from 'react';
import './Dolymi.scss';
import vector from '../../assets/images/Vector.png';
import Modal from './Modal.js';

export default function DolymiMain(){

    const [show, setShow] = useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);


    // const Modal  =({
    //     title, isOpen, onCancel, onSubmit
    // }) => {
    //     return(

    //     )
    // }

    


    return(
        
        <div className='div__main'>
        {!show && <button onClick={openModal}>Show modal</button>}<div></div>
        <Modal closeModal={closeModal} show={show} />
        </div>
    );

}

{/* <div className='dolymi__main'> 
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
                        <p>2050 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    
                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Оплата сегодня</p>
                        <p>2050 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Оплата сегодня</p>
                        <p>2050 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    <div className='dolymi__main_doly_block'>
                        <p className='dolymi__main_doly__info_text'>Оплата сегодня</p>
                        <p>2050 Р</p>
                        <div className='dolymi__main_doly_info_prokr'></div>
                    </div>
                    


                </div>
            </div>

        </div> */}