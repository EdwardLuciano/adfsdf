import React, { useEffect, useState } from 'react';
import MobileHeader from '../../mobileComponents/MobileHeader/MobileHeader';
import Concerts from '../../mobileComponents/MobileConcerts/MobileConcerts';
import Merch from '../../mobileComponents/MobileMerch/MobileMerch';
import Musics from '../../mobileComponents/MobileMusics/MobileMusics';
import About from '../../mobileComponents/MobileAbout/MobileAbout';
import Footer from '../../mobileComponents/MobileFooter/MobileFooter';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import classNames from 'classnames';
import './MainPage.scss';
import '../../MobileApp.scss';
import { Link } from 'react-router-dom';


export default function MainPage({ setCart, cart, getCartTotal }) {
    const [burgerOpened, setBurgerOpened] = useState(false);

    return (
        <div className={classNames('container', { 'no-scroll': burgerOpened })}>
            <div className="header-info__container">
                <MobileHeader
                    burgerOpened={burgerOpened}
                    setBurgerOpened={setBurgerOpened}
                />
            </div>
            <Concerts />
            <Merch  cart={cart} setCart={setCart} getCartTotal={getCartTotal} />
            <div className='link'>
                <Link to="/merch" className="go-to-catalog">ПЕРЕЙТИ В КАТАЛОГ</Link>    
            </div>
            <Musics />
            <About />
            <Footer />
            <ScrollToTop getCartTotal={getCartTotal} />
        </div>
    );
}