import React from 'react';

import { CartItemContainer, ItemDetailsContainer, Image } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <Image src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x €{price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;