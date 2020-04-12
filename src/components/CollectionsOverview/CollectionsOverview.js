import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from '../../redux/selectors/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

//styles
import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </CollectionsOverviewContainer>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
