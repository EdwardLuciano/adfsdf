import React from 'react';
import './Grid.scss';
import karman from '../../../assets/images/karman.png';
import ale from '../../../assets/images/ale.png';
import { useEffect, useState } from 'react';
// import {
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
    
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";



// const useStyles = makeStyles({
//     formControl: {
//         minWidth: '5%',
//     },
//     text: {
//         color: 'white',
//     },
// });


export default function Grid({cart,setCart,removeFromCart}) {

  let navigate = useNavigate();
    const customStyles = {
        container: (base, state) => ({
            ...base,
            height: '30px',
            margin: 0,
        }),
        singleValue: (base, state) => ({
            ...base,
            color: 'white',
            fontSize: '1.5rem',
        }),
        menu: (base, state) => ({
            ...base,
            background: '#0F0F0F',
            padding: 0,
            margin: 0,
        }),
        control: (base, state) => ({
          ...base,
          background: "#0F0F0F",
          // Overwrittes the different states of border
          border: 0,
          outline: "none",
          color: 'white',
          width: 'fit-content',
        }),
        option: (base, state) => ({
            ...base,
            padding: "16px 0",
            paddingLeft: '10px',
            background: '#0F0F0F',
            color: 'white',
        }),
        indicatorSeparator: (base, state) => ({
            ...base,
            display: 'none',
        }),
        noOptionsMessage: (base, state) => ({
            ...base,
            color: 'white'
        })
    };
    
    // const options = [
    //     {
    //         label: "XXS",
    //         value: "XXS"
    //     },
    //     {
    //         label: "XS",
    //         value: "XS"
    //     },
    //     {
    //         label: "S",
    //         value: "S"
    //     },
    //     {
    //         label: "M",
    //         value: "M"
    //     },
    //     {
    //         label: "L",
    //         value: "L"
    //     },
    //     {
    //         label: "XL",
    //         value: "XL"
    //     },
    //     {
    //         label: "XXL",
    //         value: "XXL"
    //     },
    // ];

function sizes(sizes, first = 0) {

    console.log(`?????????????? ?????????????? ${sizes}`);


    const sizesList = sizes.map((item, id) => {
        const container = {};

        container.label = item;
        container.value = item;

        return container;
    })

    if(first == 1) {
        console.log(`?????????????? first == 1 ${sizes}`);
        var firstSize = sizesList[Object.keys(sizesList)[0]];
        return firstSize.label;

    } else {

        return sizesList;

    }
  // console.log(sizesList);
    
}
  const handleChange = (selectedOption, idx) => {
      //console.log(selectedOption.value);
      console.log(idx);  //console.log(cart);
    let newCart = [...cart];
     let itemInCart = newCart.find(
      (item) => idx === item.id
    );
      itemInCart.size = selectedOption.value;
           console.log(itemInCart);

          setCart(newCart);

  console.log(cart);
  };

//   useEffect((product) => {
//     minuscount(product);
// }, []);

  const minuscount = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
        (item) => product.title === item.title
      );
      if (itemInCart.count > 1) {
        itemInCart.count--;
        itemInCart.sum = itemInCart.sum - itemInCart.price;
      }

    setCart(newCart);
  }


  const pluscount = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
        (item) => product.title === item.title
      );
      if (itemInCart.count < 5) {
        itemInCart.count++;
        itemInCart.sum=itemInCart.price * itemInCart.count;
      }

    setCart(newCart);
  }

  const go_to_main_page = () => {
    navigate('/', { replace: false });
  }

  // const removeFromCart_clear = (productToRemove) => {
  //   console.log('?????????????? ?????????????? ???? ????????????');
  //   console.log(cart);
  //   setCart(
  //     cart.filter((product) => product !== productToRemove)
  //   );
  //   console.log(cart);
  //     if (productToRemove.count == 0){
  //       go_to_main_page();
  //     }
  //     // console.log('?????????????? ?????????????? ???? ????????????');
  //     // console.log(productToRemove);
  //     // console.log(productToRemove.count);
  // }

    return (
        <div className="table_grid__container">
            <div className="grid__container">
                <div className='grid__name__text'>??????????</div>
                <div className='grid__name__text'></div>
                <div className='grid__name__text__centr'>????????</div>
                <div className='grid__name__text__centr'>????????????????????</div>
                <div className='grid__name__text__right'>????????</div>
            </div>

                {cart.map((product, idx) => (
                    
                    <div className="grid__container" key={idx}>
                        <div className="grid__name__img">
                            <img src={"https://api.ramilmusic.com/" + JSON.parse(product.img)[0]}  alt="" className='grig__name__img-image'/>
                        </div>
                        <div className="grid__name__description">
                            <p className="grid__name__description-text">{product.title}</p>
                            <div className="grid__name__description-size">
                                <p className="grid__name__description-size-text">????????????</p>
                                <Select
                                    styles={customStyles}
                                    options={sizes(product.sizes)}
                                    aria-label="????????????"
                                    placeholder={product.size}
                                    onChange={(selectedOption) => handleChange(selectedOption, product.id)}
                                />
                            </div>
                            <a className='grid__name__description-link' onClick={() => removeFromCart(product)}>?????????????? ???? ??????????????</a>
                        </div>
                        <div className='grid__name__count'>{product.price} ???</div>
                        <div className='grid__name__count'>    
                                <button className='grid__name__count__minus' onClick={() => minuscount(product)}><span className='grid__name__count__minus__minus'>-</span></button>
                                <input className ='grid__name__quanity-input' value = {product.count} />
                                <button className='grid__name__count__plus'  onClick={() => pluscount(product)}><span>+</span></button>
                        </div>
                        <div className='grid__name__count'>{product.sum} ???</div>
                    </div>


                ))}




                
        </div>
    );

}