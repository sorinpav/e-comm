import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
//components
import CartItem from '../cartItem/cartItem';

export const CartDropdown = ({ items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { items } }) => ({ items });
export default connect(mapStateToProps, null)(CartDropdown);
