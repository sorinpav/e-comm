import React from 'react';
import './CheckoutPage.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectTotalValue,
} from '../../redux/selectors/cartSelectors';
import CheckoutHeaderBlock from '../../components/CheckoutHeaderBlock/CheckoutHeaderBlock';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

//styles
import {
  CheckoutPageContainer,
  CheckoutHeader,
  Total,
} from './CheckoutPage.styles';

const CheckoutPage = ({ items, totalValue }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <CheckoutHeaderBlock blockTitle='Product' />
      <CheckoutHeaderBlock blockTitle='Description' />
      <CheckoutHeaderBlock blockTitle='Quantity' />
      <CheckoutHeaderBlock blockTitle='Price' />
      <CheckoutHeaderBlock blockTitle='Remove' />
    </CheckoutHeader>
    {items.length ? (
      items.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
    ) : (
      <p>
        You have no items in your cart. Go to{' '}
        <Link className='underlined' to='/shop'>
          shop
        </Link>
        .
      </p>
    )}
    {items.length ? <Total>Total: £{totalValue}</Total> : ''}
    <StripeButton price={totalValue} />
  </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  totalValue: selectTotalValue,
});
export default connect(mapStateToProps)(CheckoutPage);
