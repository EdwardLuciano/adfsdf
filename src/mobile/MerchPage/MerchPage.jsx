import React from 'react';
import Merch from '../../mobileComponents/MobileMerch/MobileMerch';
import HeaderWithStock from '../../mobileComponents/MobileHeaderWithStock/MobileHeaderWithStock';
import Footer from '../../mobileComponents/MobileFooter/MobileFooter';
import Pagination from '../../components/pages/merch/Merchandise/Pagination/Pagination';
import './MerchPage.scss';
import '../../MobileApp.scss';


export default function MerchPage({getCartTotal, cart, setCart}) {
    return (
        <div className="container">
            <HeaderWithStock getCartTotal={getCartTotal} />
            <Merch cart={cart} setCart = {setCart}/>
            
            <Pagination />
            <Footer />
        </div>
    );
}