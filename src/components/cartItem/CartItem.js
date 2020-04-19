import React from 'react';
import {
  Name,
  Image,
  CartItemContainer,
  ItemDetailsContainer,
} from './CartItem.styles';

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <span className='price'>
        {quantity} x £{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default cartItem;
