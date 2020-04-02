import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsCount
} from '../../redux/selectors/cartSelectors';
//components
import CartItem from '../cartItem/cartItem';

export const CartDropdown = ({ items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.length !== 0 ? (
        items.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <p style={{ textAlign: 'center' }}>
          You currently do not have items in your cart.
        </p>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = state => ({
  items: selectCartItems(state)
});
export default connect(mapStateToProps, null)(CartDropdown);
