import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenu } from './Directory.styles';

const Directory = ({ directorySections }) => (
  <DirectoryMenu>
    {directorySections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    })}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
