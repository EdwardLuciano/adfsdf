import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './mobile/MainPage/MainPage';
import MobilePaymentMain from './mobileComponents/MobilePayment/MobilePaymentMain';
import MobileOrderMain from './mobileComponents/MobileOrder/MobileOrderMain';
import MobileBasketMain from './mobileComponents/MobileBasket/MobileBasketMain'
import MobileEndOfPaymentMain from './mobileComponents/MobileEndOfPayment/MobileEndOfPaymentMain';
import MerchPage from './mobile/MerchPage/MerchPage';
import MobilePrivacyPolicy from './mobileComponents/MobilePrivacyPolicy/PrivacyPolicy';
import Refund from './mobileComponents/MobileRefund/MobileRefund';


import './MobileApp.scss';


const cartFromLocalStorage = (JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])// "[]"
const checkoutDataFromLocalStorage = (JSON.parse(localStorage.getItem('checkoutData')) ? JSON.parse(localStorage.getItem('checkoutData')) : [])// "[]"
  const stageCheckoutFromLocalStorage = (localStorage.getItem('stageCheckout') ? localStorage.getItem('stageCheckout') : 'NOT2')


export default function MobileApp() {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [checkoutData, setCheckoutData] = useState(checkoutDataFromLocalStorage);
  const [stageCheckout, setStageCheckout] = useState(stageCheckoutFromLocalStorage);

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
  }, [checkoutData]);

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { count }) => sum + count,
      0
    );
  };

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, count }) => sum + price * count,
      0
    );
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };
  console.log(getCartTotal());
    return (
        <Routes>
            <Route path="/" element={<MainPage cart={cart} setCart={setCart} getCartTotal={getCartTotal} />} />
            <Route path="/merch" element={<MerchPage cart={cart} setCart={setCart} getCartTotal={getCartTotal} />} />
            <Route path="/payment" element={<MobilePaymentMain cart={cart} setCart={setCart} getCartTotal={getCartTotal} checkoutData={checkoutData} setCheckoutData={setCheckoutData} stageCheckout={stageCheckout} setStageCheckout={setStageCheckout}  />} />
            <Route path="/order" element={<MobileOrderMain cart={cart} setCart={setCart} getCartTotal={getCartTotal} checkoutData={checkoutData} setCheckoutData={setCheckoutData} stageCheckout={stageCheckout} setStageCheckout={setStageCheckout}  />} />
            <Route path="/endofpayment" element={<MobileEndOfPaymentMain/>} />
            <Route path="/basket" element={<MobileBasketMain cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} removeFromCart={removeFromCart} />} />
            <Route path='/privacypolicy' element={<MobilePrivacyPolicy cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} removeFromCart={removeFromCart} />} />
            <Route path='/refund' element={<Refund cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} removeFromCart={removeFromCart} />} />

        </Routes>
    );
}