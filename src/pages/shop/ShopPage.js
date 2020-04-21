import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/actions/shopActions';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../../pages/collection/CollectionPage.container';
/* I have access to match because the shopPage 
itself is nested inside a Route inside App.js, 
and Route passes match, location and history as props
*/

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
