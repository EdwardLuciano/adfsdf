import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import Concerts from '../../../components/Concerts/Concerts';
import Merchandise from '../../../components/Merchandise/Merchandise';
import Musics from '../../../components/Musics/Musics';
import About from '../../../components/About/About';
import Footer from '../../../components/Footer/Footer';
import '../../../App.scss';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import Integration from '../../Integration/Integration';


export default function Main({ setCart, cart, getCartTotal }) {

    return (

 
        <div className="container">
            <Header />
            <Concerts />
            <Merchandise cart={cart} setCart={setCart} getCartTotal={getCartTotal} />
            <Musics />
            <About />
            <Integration/>
            <Footer />
            <ScrollToTop cart={cart} setCart={setCart} getCartTotal={getCartTotal}  />
        </div>

    );
}