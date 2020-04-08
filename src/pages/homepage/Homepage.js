import React from 'react';
import './Homepage.scss';
import Directory from '../../components/directory/Directory';

//styles
import { HomepageContainer } from './Homepage.styles';

const Homepage = () => {
  return (
    <HomepageContainer className='homepage'>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
