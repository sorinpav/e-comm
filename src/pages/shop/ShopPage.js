import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/actions/shopActions';
import { selectIsCollectionFetching } from '../../redux/selectors/shopSelectors';
import WithSpinner from '../../components/withSpinner/withSpinner';

/* I have access to match because the shopPage 
itself is nested inside a Route inside App.js, 
and Route passes match, location and history as props
*/

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
