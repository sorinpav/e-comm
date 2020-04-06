import React from 'react';
import './CollectionsOverview.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from '../../redux/selectors/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
