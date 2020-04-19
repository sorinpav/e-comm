import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/selectors/shopSelectors';

import {
  CollectionPageContainer,
  Title,
  ItemsContainer,
} from './CollectionPage.styles';
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
