import React, { useEffect, useState } from 'react';
import './MobileInput.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function MobileInput({cart,setCart,getCartTotal,getTotalSum,setCheckoutData,checkoutData,stageCheckout,setStageCheckout}){
    const [fio, setFio] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    let navigate = useNavigate();

    function saveCheckoutData() {

        let newCD = {...checkoutData};

        newCD.fio = fio;
        newCD.email = email;
        newCD.phone = phone;

        localStorage.setItem("checkoutData", JSON.stringify(newCD));
        // console.log(localStorage.getItem('checkoutData')+'__PaymentInput');
        // console.log(newCD);

        setCheckoutData(newCD);

    }

    const handleSubmit = (event) => {
        
        event.preventDefault();


        if((fio.length > 5) && (fio.length < 50)) {

            if((email.length > 5) && (email.length < 50)) {
                
                if ((phone.length > 5) && (phone.length < 50)) {

                    saveCheckoutData();
                    navigate('/order', { replace: false });

                
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
        <form className="input__container" onSubmit={handleSubmit}>
            <p className='input-title'>Заполните данные</p>
            <p className='input-text'>Получатель(ФИО полностью)</p>
            <input className='input-fio' placeholder='Иванов Иван Иванович' required
            onChange={event => setFio(event.target.value)}
            value={fio}
            />
            <p className='input-text'> Введите ваш e-mail</p>
            <input className='input-mail' placeholder='zakazl@mail.ru' required
            onChange={event => setEmail(event.target.value)}
            value={email}
            />
            <p className='input-text'> Введите телефон</p>
            <input className='input-phone' placeholder='+7 (999) 999-99-99' required
            onChange={event => setPhone(event.target.value)}
            value={phone}
            />
                    <div className="button__container">
            <Link to="/basket" className='button-behind'> <p className='button-behind-text'> Назад</p></Link>
            <button className='button-next'> <p className='button-next-text'> Далее</p></button>
            
        </div>
        </form>
    );

}