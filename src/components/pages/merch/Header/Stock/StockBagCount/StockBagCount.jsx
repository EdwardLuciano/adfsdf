import React from 'react';
import bag from '../../../../../../assets/images/stock.svg';
import "./StockBagCount.scss";


export default  function StockBagCount({getCartTotal}){
    return ( 
        <div className="header-info-merch__stockbag">
            <img src={bag} alt="" className="header-info-merch__stockbag-icon" />
            <p className="header-info-merch__count">{getCartTotal()}</p>
        </div>
    ) 
}
