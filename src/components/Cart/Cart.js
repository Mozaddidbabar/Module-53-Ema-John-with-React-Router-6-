import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;


    // const totalReducer = (previous, product) => (previous + (product.quantity ? product.quantity : 1) * product.price);
    // const total = cart.reduce(totalReducer, 0);


    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) product.quantity = 1;
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }

    const shipping = total > 0 ? 5.99 : 0;
    const beforeTaxTotal = total + shipping;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-texts'>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Items ordered: {totalQuantity}</p>
            </div>
            <div className='cart-costs'>
                <div>
                    <p><small>Items</small></p>
                    <p><small>Shipping</small></p>
                    <p><small>Total Before Tax</small></p>
                    <p><small>Estimated Tax</small></p>
                    <h4>Order Total</h4>
                </div>
                <div>
                    <p><small>:  ${total.toFixed(2)}</small></p>
                    <p><small>:  ${shipping.toFixed(2)}</small></p>
                    <p><small>:  ${beforeTaxTotal.toFixed(2)}</small></p>
                    <p><small>:  ${tax.toFixed(2)}</small></p>
                    <h4>: ${grandTotal.toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;