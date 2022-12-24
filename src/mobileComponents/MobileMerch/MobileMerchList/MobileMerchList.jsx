import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import './MobileMerchList.scss';
import { merchandise } from '../../../constants';
import MerchListItem from './MobileMerchListItem/MobileMerchListItem';
import { useNavigate } from "react-router-dom";
import {
  Provider as AlertProvider,
  useAlert,
  positions,
  transitions
} from 'react-alert';

export default function MobileMerchList({ setCart, cart }) {

  const alert = useAlert();
  let navigate = useNavigate();


  const [items, setItems] = useState([]);
  const apiURL = "https://api.ramilmusic.com/merch?_format=json";

  useEffect(() => {
       getMerch();
  }, []);


  const Button_Merch = ({product}) => {
    
    console.log('Мобилльное приложение')
    console.log(product);
    console.log(cart);


    let checkInCart = cart.find(
        (item) => product.id === item.id
    );

    const go_to_basket = () => {
      navigate('/basket', { replace: false });
    }



    const addToCart = (product) => {

      console.log('Зашли в условие в побильном приложении');
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
   
      setCart(newCart);
      
 
      alert.show(<div className = "merchandise_alert" style={{ color: 'white', textTransform: 'none', width: '195px' }}>Товар добавлен в корзину</div>,
      {
        timeout: 1000, // custom timeout just for this one alert
        type: 'success',
      })
    };
  
    console.log(checkInCart);
    
    if (!checkInCart){
            console.log('Заходж');

        return (
                <a className="mobile-merchandise__list-item-buy" onClick={() => addToCart(product)}>Купить</a>
        )
    } else{

        return (
                <a className="mobile-merchandise__list-item-buy mobile-merchandise__list-item-buy_goToBasket" onClick={() => go_to_basket()}>В корзине</a>
        )


    }
  }

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

            {items.map((product, idx) => (
              <div className="mobile-merchandise__list-item" key={idx}>
                <img src={"https://api.ramilmusic.com/" + JSON.parse(product.img)[0]} alt="Merchandise Item" className="mobile-merchandise__list-item-img"  onClick={event => navigate('/product/'+product.id, { replace: false })}/>
                <h2 className="mobile-merchandise__list-item-title">{product.title}</h2>
                <div className="mobile-merchandise__list-item__price">
                    <p className="current-price">{product.price}₽</p>
                    <del className="previous-price">{product.oldprice}₽</del>

                    {/* <Button_Merch product = {product} /> */}
                </div>

                 <Button_Merch product = {product} /> 

              </div>
            ))}

            
        </div>
           
        </>
    );
}