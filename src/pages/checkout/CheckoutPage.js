import React from 'react';
import './CheckoutPage.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectTotalValue
} from '../../redux/selectors/cartSelectors';
import CheckoutHeaderBlock from '../../components/CheckoutHeaderBlock/CheckoutHeaderBlock';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CheckoutPage = ({ items, totalValue }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <CheckoutHeaderBlock blockTitle='Product' />
      <CheckoutHeaderBlock blockTitle='Description' />
      <CheckoutHeaderBlock blockTitle='Quantity' />
      <CheckoutHeaderBlock blockTitle='Price' />
      <CheckoutHeaderBlock blockTitle='Remove' />
    </div>
    {items.length ? (
      items.map(item => <CheckoutItem key={item.id} cartItem={item} />)
    ) : (
      <p>
        You have no items in your cart. Go to{' '}
        <Link className='underlined' to='/shop'>
          shop
        </Link>
        .
      </p>
    )}
    {items.length ? <div className='total'>Total: £{totalValue}</div> : ''}
  </div>
);
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  totalValue: selectTotalValue
});
export default connect(mapStateToProps)(CheckoutPage);
