import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
//withRouter gives access to the location, match and history props that we need, from the App.js routes
//this way, prop drilling is avoided
