import React, { useEffect, useState } from 'react';
import axios from "axios"
import './MobileMerchList.scss';
import { merchandise } from '../../../constants';
import MerchListItem from './MobileMerchListItem/MobileMerchListItem';


export default function MerchList({ setCart, cart }) {

  const [items, setItems] = useState([]);
  const apiURL = "https://api.ramilmusic.com/merch?_format=json";
  console.log(cart);

  useEffect(() => {
       getMerch();
  }, []);

  const getMerch = () => {
    axios.get(apiURL)
    .then(function (response) {
      setItems(response.data.items);
    })
    .catch(function (error) {
      console.log('error get merch');
    })
  }

  const addToCart = (product) => {

    let newCart = [...cart];

    let itemInCart = newCart.find(
      (item) => product.title === item.title
    );
    if (itemInCart) {
        itemInCart.count++;
        itemInCart.sum=itemInCart.price*itemInCart.count;
    } else {
      itemInCart = {
        ...product,
        count: 1,
        sum: product.price,
        size: product.sizes[0],
      };
      newCart.push(itemInCart);
    }
    console.log(itemInCart);
    setCart(newCart);
    
  };

    return (
        <>
        <div className="mobile-merchandise__list">

            {items.map(product => (
            <div className="mobile-merchandise__list-item">
                <img src={"https://api.ramilmusic.com/" + JSON.parse(product.img)[0]} alt="Merchandise Item" className="mobile-merchandise__list-item-img" />
                <h2 className="mobile-merchandise__list-item-title">{product.title}</h2>
                <div className="mobile-merchandise__list-item__price">
                    <p className="current-price">{product.price}₽</p>
                    <del className="previous-price">{product.oldprice}₽</del>
                </div>
                <a className="mobile-merchandise__list-item-buy" onClick={() => addToCart(product)}>Купить</a>
            </div>
            ))}

        </div>
        </>
    );
}