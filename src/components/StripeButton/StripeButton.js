import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XvBAsWW86JnB2BnMwKONA3Pd00yFAHhqjo';

  const onToken = token => {
    console.log(token);
    alert('Payment successful.');
  };
  return (
    <StripeCheckout
      stripeKey={publishableKey}
      currency='GBP'
      label='Pay Now'
      name='E-Comm Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
    />
  );
};

export default StripeButton;
