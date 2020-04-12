import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';

/* I have access to match because the shopPage 
itself is nested inside a Route inside App.js, 
and Route passes match, location and history as props
*/
const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
