import React from 'react';
import './MerchandiseListItem.scss';


export default function MerchandiseListItem({ product, setCart, cart }) {

  const addToCart = (product) => {
    console.log(cart);
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === product.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    
  };

    return (
        <div className="merchandise__list-item">
            <img src={"https://zefirmusic.ru/" + product.img} alt={product.title} />
            <div className="merchandise__list-item__information">
                <h2 className="merchandise__list-item__title">{product.title}</h2>
                <p className="merchandise__list-item__description">{product.description}</p>
                <div className="merchandise__list-item__price">
                    <p className="current-price">{product.newprice}₽</p>
                    <del className="previous-price">{product.oldprice}₽</del>
                </div>
                <div className="merchandise__list-item__buttons">
                    <a href="#" className="merchandise__list-item__more">Подробнее</a>
                    <a href="#" className="merchandise__list-item__buy" onClick={() => addToCart(product)}>Купить</a>
                </div>
            </div>
        </div>
    );
}