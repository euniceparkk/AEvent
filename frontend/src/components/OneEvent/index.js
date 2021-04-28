import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './OneEvent.css'

// import { favoritedEvent, unfavoritedEvent } from '../../store/events';

function OneEvent({ user, event, dateTime, favorites }) {
  // const dispatch = useDispatch();
  // const addFavorite = (eventId) => dispatch(favoritedEvent(eventId));
  // const deleteFavorite = (eventId) => dispatch(unfavoritedEvent(eventId));

  return (
    <div className='single-event'>
      <NavLink className='single-event__link' to={`/events/${event.id}`}>
        <div single-event__image-container>
          <img alt='one-event' className='single-event__image' src={event.image}></img>
        </div>
        <div className='single-event__details'>
          <p className='single-event__title'>{event.title}</p>
          <p className='single-event__date'>{dateTime}</p>
        </div>
      </NavLink>

    </div>
  )
}

export default OneEvent;