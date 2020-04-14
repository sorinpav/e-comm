import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { createStructuredSelector } from 'reselect';
//components
import CartItem from '../cartItem/CartItem';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownButton,
} from './CartDropdown.styles';

export const CartDropdown = ({ items, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p style={{ textAlign: 'center' }}>
          You currently do not have items in your cart.
        </p>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});
export default withRouter(connect(mapStateToProps, null)(CartDropdown));
