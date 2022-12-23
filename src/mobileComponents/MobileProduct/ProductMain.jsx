import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import './Product.scss';
import HeaderWithStock from '../MobileHeaderWithStock/MobileHeaderWithStock';
import ImageGallery from 'react-image-gallery';
import withSelections from 'react-item-select';
import { useNavigate } from "react-router-dom";
import {
  Provider as AlertProvider,
  useAlert,
  positions,
  transitions
} from 'react-alert';
import axios from "axios";
import Footer from '../../mobileComponents/MobileFooter/MobileFooter';



//import MerchandiseHeader from './Merchandise/MerchandiseHeader/MerchandiseHeader';
// import MerchandiseList from '../../Merchandise/MerchandiseList/MerchandiseList';
// import Footer from '../../Footer/Footer';
// import Pagination from './Merchandise/Pagination/Pagination';



export default function Product( {cart, setCart, getCartTotal} ) {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api.ramilmusic.com/merch/${id}?_format=json`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const [selectedSize, setSelectedSize] = useState('null');

    console.log(selectedSize)
        const currentValueSize = (IdProduct) => {
            IdProduct = Number(IdProduct);
            console.log(IdProduct)
            let cartData = JSON.parse(localStorage.getItem('cart'));        
            for (let cartItem of cartData) {
                if(cartItem.id === IdProduct) {
                    return cartItem.size;
                } 
            }

            //return product.size;
        }
        if(selectedSize == 'null') {
            setSelectedSize(currentValueSize(id));
            console.log(selectedSize);
        }


    const alert = useAlert();
    let navigate = useNavigate();

    const SizesSelect = ({ListSizes,IdProduct,setCart,cart}) => {

        const handleOnClick = (size,IdProduct) => {
            IdProduct = Number(IdProduct);
            setSelectedSize(size);
            console.log(selectedSize);
            let newCart = [...JSON.parse(localStorage.getItem('cart'))]; 
            let itemInCart = newCart.find(
              (item) => item.id === IdProduct
            );
        
            if(itemInCart) {
                itemInCart.size = size;
                setCart(newCart);
            } 
            
        }


       

        return (
            <div className="SizesSelect">
                {
                    ListSizes.map((size, idx) => (
                        <div key={idx} className={'SizesSelect__size'+((size == selectedSize) ? ' selected' : '')} onClick={event => setSelectedSize(size)}>
                            <span>{size}</span>
                        </div>
                        )
                    )
                }
            </div>
        );
    }

    const ButtonBuy = ({product}) => {

        let checkInCart = cart.find(
            (item) => product.id === item.id
        );

        const go_to_basket = () => {
            navigate('/basket', { replace: false });
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
                    size: selectedSize ? selectedSize : product.sizes[0],
                };
                newCart.push(itemInCart);
            }

            setCart(newCart);

            alert.show(<div className = "merchandise_alert" style={{ color: 'white', textTransform: 'none', width: '195px' }}>Товар добавлен в корзину</div>,
            {
                timeout: 1000,
                type: 'success',
            })
        };
        
        if (!checkInCart){
            console.log('Заходж');
            return (
                <div className="productDescription__addToCart" onClick={() => addToCart(product)}>Добавить в корзину</div>
            )
        } else {
            return (
                <div className="productDescription__addToCart productDescription__addToCart_goToBasket" onClick={() => go_to_basket()}>Перейти в корзину</div>
            )
        }


    }




    function genObjGallery(product) {

        if (product) {

            let GalleryImages = [];

            let i = 0;
            for (let ImgGallery of JSON.parse(product.img)) {
                GalleryImages[i] = {
                    original: 'https://api.ramilmusic.com'+ImgGallery,
                    thumbnail: 'https://api.ramilmusic.com'+ImgGallery
                }
                i++;
            }

            return GalleryImages;

        } else {
            return [];
        }
    }

    let afaf = genObjGallery(product);
    console.log(genObjGallery(product));

    return (
        <div className="productBody">
            <HeaderWithStock getCartTotal={getCartTotal}/>

            {product && (
                <>
                    <div className="productBodyCart">
                        <div className="productBodyCart__container">

                            <div className="productBodyCart__half productBodyCart__half_title">
                                <h1 className="productBodyCart__title">{product.title}</h1>
                            </div>

                            <div className="productBodyCart__half productBodyCart__half_gallery">
                                <ImageGallery items={afaf} thumbnailPosition="right" showNav={false} lazyLoad={true} showPlayButton={false} />
                            </div>

                            <div className="productBodyCart__half productBodyCart__half_description">
                                <div className="productDescription">
                                    <h2 className="productBodyCart__price">{product.price}₽</h2>
                                    <div className="productSelectSize">
                                        <div className="productSelectSize__label">Размер RU</div>
                                        <SizesSelect 
                                            ListSizes={product.sizes} 
                                            IdProduct={id}
                                            setCart={setCart}
                                            cart={cart}
                                        />
                                    </div>
                                    <ButtonBuy product={product}/>
                                    <div className="productDescription__extraInfo">
                                        <div className="productExtraInfo productExtraInfo__deliveryWorldwide">Доставка по всему миру</div>
                                        <div className="productExtraInfo productExtraInfo__refund">14 дней на возврат</div>
                                    </div>
                                    <div className="productDescription__structure">
                                        <div className="productStructure__label">Описание</div>
                                        <div className="productStructure__desc">футер трехнитка петля, 100% хлопок, плотность 340 гр</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
}