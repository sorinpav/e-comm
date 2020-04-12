import React from 'react';

//redux bindings
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartActions';

//styles
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionItemCustomButton,
  Footer,
  Name,
  Price,
} from './CollectionItem.styles';
function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CollectionItemCustomButton isInverted onClick={() => addItem(item)}>
        Add to Cart
      </CollectionItemCustomButton>
    </CollectionItemContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
