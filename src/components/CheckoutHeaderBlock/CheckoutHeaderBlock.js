import React from 'react';

import { HeaderBlock } from './CheckoutHeaderBlock.styles';
const CheckoutHeaderBlock = ({ blockTitle }) => (
  <HeaderBlock>
    <span>{blockTitle}</span>
  </HeaderBlock>
);

export default CheckoutHeaderBlock;
