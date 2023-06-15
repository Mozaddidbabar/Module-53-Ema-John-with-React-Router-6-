import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        // console.log('Product API called');
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
                // console.log('Products Received');
            })
    }, [])

    useEffect(() => {
        // console.log('LocalStorage Called');
        const savedCart = getStoredCart();
        // console.log(savedCart);
        if (products.length) {
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const newProduct = products.find(product => product.key === key);
                // console.log(key, newProduct);
                if (newProduct) {
                    const quantity = savedCart[key];
                    newProduct.quantity = quantity;
                    // console.log(newProduct);
                    storedCart.push(newProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // add to local storage (for now)
        addToDb(product.key);
    }
    const handleSearchText = event => {
        const searchText = event.target.value;
        // console.log(searchText.toLowerCase());
        const searchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        // console.log(searchProduct.length);
        setDisplayProduct(searchProduct);
    }
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder='Search Product' onChange={handleSearchText} />
            </div>


            <div className='shop-container'>
                <div className="product-container">
                    {
                        !displayProduct.length ? <p className='not-found-text'>No Result Found</p> :
                            displayProduct.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleAddToCart={handleAddToCart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;