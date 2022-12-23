import React from 'react';
import './MobileGrid.scss';
import bulik from '../../../assets/images/bulik.png'
import cross from '../../../assets/images/Cross.svg'
import ramil from '../../../assets/images/t-ramil.png'
import Select from 'react-select';

export default function MobileGrid({cart,setCart,removeFromCart}) {

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
        }),
        valueContainer: (base, state) => ({
            ...base,
            padding: '0 0 0 5px',
        })
    };
function sizes(sizes, first = 0) {


    const sizesList = sizes.map((item, id) => {
        const container = {};

        container.label = item;
        container.value = item;

        return container;
    })

    if(first == 1) {

        var firstSize=sizesList[Object.keys(sizesList)[0]];
        return firstSize.label;

    } else {

        return sizesList;

    }
  // console.log(sizesList);
    
}
  const handleChange = (selectedOption, idx) => {
    let newCart = [...cart];
     let itemInCart = newCart.find(
      (item) => idx === item.id
    );
      itemInCart.size = selectedOption.value;
          setCart(newCart);

  console.log(cart);    
  };
    return (
        <div>
        {cart.map((product, idx) => (

        <div className='mobile__grid__container' key={idx}>
            <img src={"https://api.ramilmusic.com/" + JSON.parse(product.img)[0]} alt="Bulik" className="mobile__grid__img__bulik" />
            <div className='mobile__description__container'>
                <p className='mobile__description__name'>{product.title}</p>
                <div className='mobile__description__size'>
                 <p className="mobileGrid__name__description-size-text">Размер</p>
                                <Select
                                    styles={customStyles}
                                    options={sizes(product.sizes)}
                                    aria-label="Размер"
                                    placeholder={product.size}
                                    onChange={(selectedOption) => handleChange(selectedOption, product.id)}
                                />
                </div>
                {/* <div className='mobile__description__count'> 
                    <p className='mobile__description__count__text'> Количество </p> 
                </div> */}
                <div className = 'mobile__description__count'>
                    <button className='mobile__description__count__minus' onClick={() => minuscount(product)}><span className = 'mobile__description__count__minus__minus'>-</span></button>
                        <input className="mobile__description__inputCount" value={product.count} />
                    <button className='mobile__description__count__plus'  onClick={() => pluscount(product)}><span className='mobile__description__count__plus__plus'>+</span></button>
                </div>
                
                <p className='mobile__description__price'> {product.sum}₽ <del className='mobile__description__previos-price'> </del></p>
            </div>
            <img src={cross} alt="Cross" className="mobile__grid__img__cross" onClick={() => removeFromCart(product)}/>

        </div>

        ))}
        </div>
    );
}