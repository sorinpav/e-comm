import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './PreviewCollection.scss';
function PreviewCollection({ title, items }) {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
