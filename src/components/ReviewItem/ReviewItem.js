import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, key, quantity } = props.product;
    const { handleRemove } = props;
    return (
        <div className='products'>
            <div>

            </div>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <div className='product-details'>
                    <div>
                        <p><small>by: {seller}</small></p>
                        <h3>Price: ${price}</h3>
                        <h4 className='fw-bold'>Quantity: {quantity}</h4>
                        <button
                            className='btn-cart'
                            onClick={() => handleRemove(key)}
                        >Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;