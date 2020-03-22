import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/Directory';
const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
