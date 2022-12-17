import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PaymentInput.scss'
import { useNavigate } from "react-router-dom";


export default function PaymentInput({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){


    const [fio, setFio] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    let navigate = useNavigate();

    // useEffect(() => {
    //                   localStorage.setItem("checkoutData", JSON.stringify(fio));

    // }, [fio]);

    // useEffect(() => {
    //     localStorage.setItem('checkoutData').email = email;
    // }, [email]);

    // useEffect(() => {
    //     localStorage.setItem('checkoutData').phone = phone;
    // }, [phone]);
        useEffect(() => {
            localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

        }, [checkoutData]);
    function saveCheckoutData() {

        let newCD = {...checkoutData};

        newCD.fio = fio;
        newCD.email = email;
        newCD.phone = phone;

       //  localStorage.setItem('checkoutData', JSON.stringify(newCD));




        setCheckoutData(newCD);

        //console.log(localStorage.getItem('checkoutData')+'__PaymentInput');
        console.log(checkoutData);


    }



    const handleSubmit = (event) => {
        
        event.preventDefault();


        if((fio.length > 5) && (fio.length < 50)) {

            if((email.length > 5) && (email.length < 50)) {
                
                if ((phone.length > 5) && (phone.length < 50)) {

                    saveCheckoutData();
                          //  navigate('/order', { replace: false });

                
                } else {

                    alert('Введите корректный номер телефона');

                }

            
            } else {

                alert('Введите корректный Email');

            }

        } else {

            alert('Введите корректные ФИО');

        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className='payment-input__container'>
            <p className='payment-input__text'>Получатель (ФИО полностью)</p>
            <input className='payment-input__input-fio' placeholder="Иванов Иван Иванович" required
            onChange={event => setFio(event.target.value)}
            value={fio}
            />

            <p className='payment-input__text'>Введите ваш email</p>
            <input className='payment-input__input-fio' placeholder="zakaz1@mail.ru" required 
            onChange={event => setEmail(event.target.value)}
            value={email}
            />

            <p className='payment-input__text'>Введите телефон</p>
            <input className='payment-input__input-fio' placeholder="+7 (999) 999-99-99" required
            onChange={event => setPhone(event.target.value)}
            value={phone}
            />

        </div>
        <div className='payment-input__button'>
            <Link to="/basket" className='payment-input__button-behind'>
                <p className='payment-input__button-behind-text'>Назад</p>
            </Link>
            <button className='payment-input__button-next' type="submit">
                <p className='payment-input__button-next-text'>Далее</p>
            </button>

        </div>
        </form>
    );
}