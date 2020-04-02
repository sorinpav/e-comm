import React from 'react';
import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';

//redux bindings
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartActions';
function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton isInverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
