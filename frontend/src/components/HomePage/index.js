import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { getEvents, getTickets, getFavorites } from '../../store/events';
import CategoryBar from '../CategoryBar';
import CategoryEvents from '../CategoryEvents';

function HomePage() {

  return (
    <>
      <h1>Home Page</h1>
      <CategoryBar />
      <CategoryEvents />
    </>

  );

}

export default HomePage;