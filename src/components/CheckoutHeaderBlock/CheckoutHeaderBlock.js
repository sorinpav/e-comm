import React from 'react';
import './CheckoutHeaderBlock.scss';

const CheckoutHeaderBlock = ({ blockTitle }) => (
  <div className='header-block'>
    <span>{blockTitle}</span>
  </div>
);

export default CheckoutHeaderBlock;
