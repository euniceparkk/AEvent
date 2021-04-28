import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { getEvents, getTickets, getFavorites } from '../../store/events';
import CategoryBar from '../CategoryBar';
import CategoryEvents from '../CategoryEvents';

import './HomePage.css'

function HomePage() {

  return (
    <div className='home-page__wrapper'>
      <h1>Home Page</h1>
      <CategoryBar />
      {/* <CategoryEvents /> */}
    </div>

  );

}

export default HomePage;