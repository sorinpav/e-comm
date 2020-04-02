import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

export const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
