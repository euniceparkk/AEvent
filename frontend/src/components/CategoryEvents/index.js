import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { getTickets } from '../../store/events';
import { getEvents, getFavorites } from '../../store/events';
import OneEvent from '../OneEvent';
import { newDate } from '../Utils/index';

import './CategoryEvents.css'

function CategoryEvents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
    // dispatch(getTickets());
    dispatch(getFavorites());
  }, [dispatch])

  const sessionUser = useSelector(state => state.session.user);
  // const tickets = useSelector(state => state.events.tickets);
  const favorites = useSelector(state => state.events.favorites);
  const events = useSelector(state => state.events.events);

  
  return (
    <div className='events-container'>
      {events && events.map(event => {
        const dateTime = newDate(event.dateAndTime);
        return <OneEvent key={event.id} user={sessionUser} event={event} dateTime={dateTime} favorites={favorites} />
      })}
      <h2>hi</h2>
    </div>
  )
}

export default CategoryEvents;