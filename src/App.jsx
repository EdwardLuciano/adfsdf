import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Main from './components/pages/main/Main';
import Merchandise from './components/pages/merch/MerchMain';
import Payment from './components/Payment/PaymentMain'
import Order from './components/Order/OrderMain'
import EndofPayment from './components/EndofPayment/EndofPaymentmain'
import Basket from './components/Basket/Basketmain'
import Tour from './components/pages/tour/tour';
import Tourtest from './components/pages/tourtest/tour';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Refund from './components/Refund/Refund';
import Password from './components/pages/password/password';
import Product from './components/pages/product/ProductMain';
import DolymiMain from './components/Dolami/Dolymi';
//import { useRouter } from 'next/router'
 

import {
  Routes,
  Route
} from 'react-router-dom';

import { useEventCallback } from '@mui/material';


  const cartFromLocalStorage = (JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])// "[]"
  //const checkoutDataFromLocalStorage = (JSON.parse(localStorage.getItem('checkoutData')) ? JSON.parse(localStorage.getItem('checkoutData')) : [])// "[]"
  const stageCheckoutFromLocalStorage = (localStorage.getItem('stageCheckout') ? localStorage.getItem('stageCheckout') : 'NOT2')

function App() {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [checkoutData, setCheckoutData] = useState((JSON.parse(localStorage.getItem('checkoutData')) ? JSON.parse(localStorage.getItem('checkoutData')) : []));
  const [stageCheckout, setStageCheckout] = useState(stageCheckoutFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
    // console.log('Занесли');
    // console.log(checkoutData);
    // console.log(localStorage.getItem('checkoutData'));
  }, [checkoutData]);

  useEffect(() => {
    localStorage.setItem("stageCheckout", stageCheckout);
  }, [stageCheckout]);

  let navigate = useNavigate();


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
    console.log(window.location.pathname);
    console.log(cart.length);
    if (window.location.pathname == "/basket" && cart.length == 1){
      navigate('/', { replace: false });
    }
  };

  return (

    <Routes> 

      <Route path="/" element={<Main cart={cart} setCart={setCart} getCartTotal={getCartTotal} />} />
      <Route path="/merch" element={<Merchandise cart={cart} setCart={setCart} getCartTotal={getCartTotal} />} />
      <Route path="/payment" element={<Payment cart={cart} setCart={setCart} getCartTotal={getCartTotal} checkoutData={checkoutData} setCheckoutData={setCheckoutData} stageCheckout={stageCheckout} setStageCheckout={setStageCheckout}  />} />
      <Route path="/order" element={<Order cart={cart} setCart={setCart} getCartTotal={getCartTotal} checkoutData={checkoutData} setCheckoutData={setCheckoutData} stageCheckout={stageCheckout} setStageCheckout={setStageCheckout} />} />
      <Route path="/endofpayment" element={<EndofPayment cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} checkoutData={checkoutData} setCheckoutData={setCheckoutData}/>}/>
      <Route path='/basket' element={<Basket cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} removeFromCart={removeFromCart} />}/>
      <Route path='/tour2022' element={<Tour />} />
      <Route path='/tour2022test' element={<Tourtest />} />
      <Route path='/password' element={<Password />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} removeFromCart={removeFromCart} />} />
      <Route path='/refund' element={<Refund cart={cart} setCart={setCart} getCartTotal={getCartTotal} getTotalSum={getTotalSum} removeFromCart={removeFromCart} />} />
      <Route path='/dol' element={<DolymiMain />} />
  <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} getCartTotal={getCartTotal} />} />
    </Routes>
   
  );
}
export default App;