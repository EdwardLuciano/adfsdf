import React, { useEffect, useState } from 'react';
import '../../../App.scss';
import MerchHeader from './Header/MerchHeader';
import MerchandiseHeader from './Merchandise/MerchandiseHeader/MerchandiseHeader'
import MerchandiseList from '../../Merchandise/MerchandiseList/MerchandiseList';
import Footer from '../../Footer/Footer';
import Pagination from './Merchandise/Pagination/Pagination';


export default function Merchandise({cart, setCart, getCartTotal}) {
    return (
        <div className="container">
            <MerchHeader getCartTotal={getCartTotal} />
            <MerchandiseHeader />
            <MerchandiseList cart={cart} setCart={setCart} />
            <Pagination />
            <Footer />
        </div>
    );
}