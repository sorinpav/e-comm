import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './CartIcon.styles';
import { createStructuredSelector } from 'reselect';
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
