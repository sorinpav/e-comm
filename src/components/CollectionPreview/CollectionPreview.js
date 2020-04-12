import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

//styles with styled-components
import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from './CollectionPreview.styles';
function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
