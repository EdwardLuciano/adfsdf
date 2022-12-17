import React, { useEffect, useState } from 'react';

import { merchandise } from '../../../constants';
import { Link } from 'react-router-dom';
import axios from "axios"
import './MerchandiseList.scss';
import './MerchandiseListItem/MerchandiseListItem.scss';


export default function MerchandiseList({ setCart, cart }) {


 //   const cartFromLocalStorage = (JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])// "[]"
  //  const [cart, setCart] = useState(cartFromLocalStorage);





  const [items, setItems] = useState([]);
  const apiURL = "https://api.ramilmusic.com/merch?_format=json";

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
        <div className="merchandise__list">
            {items.map((product, idx) => (

                <div className="merchandise__list-item" key={idx}>
                    <img src={"https://api.ramilmusic.com/" + JSON.parse(product.img)[0]} alt={product.title} />
                    <div className="merchandise__list-item__information">
                        <h2 className="merchandise__list-item__title">{product.title}</h2>
                        <p className="merchandise__list-item__description">{product.description}</p>
                        <div className="merchandise__list-item__price">
                            <p className="current-price">{product.price}₽</p>
                            <del className="previous-price">{product.oldprice}₽</del>
                        </div>
                        <div className="merchandise__list-item__buttons">
                            <a className="merchandise__list-item__more">Подробнее</a>
                            <a className="merchandise__list-item__buy" onClick={() => addToCart(product)}>Купить</a>
                        </div>
                    </div>
                </div>

            ))}

        </div>

            <Link to="/merch" className="go-to-catalog">ПЕРЕЙТИ В КАТАЛОГ</Link>
        </>
    );
}