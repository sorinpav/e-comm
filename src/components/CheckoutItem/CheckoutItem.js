import React from 'react';
import {
  clearItem,
  addItem,
  removeItem,
} from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from './CheckoutItem.styles';
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price * quantity}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
