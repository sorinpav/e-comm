import React from 'react';
import { connect } from 'react-redux';
import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ directorySections }) => (
  <div className='directory-menu'>
    {directorySections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
