import React from 'react';
import './MobileMerchListItem.scss';


export default function MerchListItem({ title, currentPrice, previousPrice, image }) {
    return (
        <div className="mobile-merchandise__list-item">
            <img src={image} alt="Merchandise Item" className="mobile-merchandise__list-item-img" />
            <h2 className="mobile-merchandise__list-item-title">{title}</h2>
            <div className="mobile-merchandise__list-item__price">
                <p className="current-price">{currentPrice}₽</p>
                <del className="previous-price">{previousPrice}₽</del>
            </div>
            <a href="#" className="mobile-merchandise__list-item-buy">Купить</a>
        </div>
    );
}