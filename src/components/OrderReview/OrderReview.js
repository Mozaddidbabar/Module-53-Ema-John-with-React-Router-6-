import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import useCart from '../../hooks/useCart/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { deleteFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        setCart(cart.filter(product => product.key !== key));
        deleteFromDb(key);
    }
    // console.log(products);
    return (
        <>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default OrderReview;