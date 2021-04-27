import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents, getTickets, getFavorites } from '../../store/events';

import HomePageEvents from '../HomePage'
function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getTickets());
    dispatch(getFavorites());
  }, [dispatch])

  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events.events);
  const tickets = useSelector(state => state.events.tickets);
  const favorites = useSelector(state => state.events.favorites);

  // Returning props to children components
  return (
    <>
      <HomePageEvents user={sessionUser} events={events} tickets={tickets} favorites={favorites} />
    </>
  );

}

export default HomePage;