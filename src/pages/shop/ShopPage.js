import React from 'react';
import { connect } from 'react-redux';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/selectors/shopSelectors';
const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <PreviewCollection key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});
export default connect(mapStateToProps)(ShopPage);
