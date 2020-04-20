import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/selectors/shopSelectors';
import WithSpinner from '../withSpinner/withSpinner';
import CollectionsOverview from './CollectionsOverview';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching, //needs to be named the same as the one that withSpinner is expecting
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
