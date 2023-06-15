import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, shipping, star, stock, features} = props.product;
    // console.log(features[0].description);
    return (
        <div className='products'>
            <div>
                <img src={img} alt="product-image" />
            </div>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <div className='product-details'>
                    <div>
                        <p><small>by: {seller}</small></p>
                        <h3>${price}</h3>
                        <p>only {stock} left in stock - order soon</p>
                        <button 
                            className='btn-cart'
                            onClick={() => props.handleAddToCart(props.product)}
                        ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                    </div>
                    <div className='product-details-right'>
                        <Rating 
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly />
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map(feature => <li className='feature-description'><p><small>{feature.description} <b>{feature.value}</b></small></p></li> )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;