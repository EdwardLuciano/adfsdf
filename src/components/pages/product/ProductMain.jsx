import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import '../../../App.scss';
import './Product.scss';
import MerchHeader from './Header/MerchHeader';
import ImageGallery from 'react-image-gallery';
import withSelections from 'react-item-select';



//import MerchandiseHeader from './Merchandise/MerchandiseHeader/MerchandiseHeader';
// import MerchandiseList from '../../Merchandise/MerchandiseList/MerchandiseList';
// import Footer from '../../Footer/Footer';
// import Pagination from './Merchandise/Pagination/Pagination';

const SizesSelect = ({ListSizes,IdProduct,setCart,cart}) => {

    const currentValueSize = (id) => {
        id = Number(id);
        let cartData = JSON.parse(localStorage.getItem('cart'));        
        for (let cartItem of cartData) {
            
            if(cartItem.id === id) {
                return cartItem.size;
            }
             
        }
    }

    const [selectedSize, setSelectedSize] = useState(currentValueSize(IdProduct));

    const handleOnClick = (index,id) => {
        id = Number(id);
        setSelectedSize(index);

        let newCart = [...JSON.parse(localStorage.getItem('cart'))]; 
        let itemInCart = newCart.find(
          (item) => item.id === id
        );
    
        itemInCart.size = index;
        setCart(newCart);
    }


   

    return (
        <div className="SizesSelect">
            {
                ListSizes.map((size, idx) => (
                    <div key={idx} className={'SizesSelect__size'+((size == selectedSize) ? ' selected' : '')} onClick={() => handleOnClick(size,IdProduct)}>
                        <span>{size}</span>
                    </div>
                    )
                )
            }
        </div>
    );
}

export default function Product( {cart, setCart, getCartTotal} ) {


    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api.ramilmusic.com/merch/${id}?_format=json`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

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
            <MerchHeader getCartTotal={getCartTotal} />

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
                                    <div className="productDescription__addToCart">Добавить в корзину</div>
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
        </div>
    );
}