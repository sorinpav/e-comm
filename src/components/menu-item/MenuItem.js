import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  Content,
  Title,
  Subtitle,
} from './MenuItem.styles';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Content className='content'>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
//withRouter gives access to the location, match and history props that we need, from the App.js routes
//this way, prop drilling is avoided
