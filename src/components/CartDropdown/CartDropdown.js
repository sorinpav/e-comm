import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { createStructuredSelector } from 'reselect';
//components
import CartItem from '../cartItem/cartItem';
import { toggleCartHidden } from '../../redux/actions/cartActions';

export const CartDropdown = ({ items, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {items.length ? (
        items.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <p style={{ textAlign: 'center' }}>
          You currently do not have items in your cart.
        </p>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  items: selectCartItems
});
export default withRouter(connect(mapStateToProps, null)(CartDropdown));
