import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './OneEvent.css'

// import { favoritedEvent, unfavoritedEvent } from '../../store/events';

function OneEvent({ user, event, dateTime, favorites }) {
  // const dispatch = useDispatch();
  // const addFavorite = (eventId) => dispatch(favoritedEvent(eventId));
  // const deleteFavorite = (eventId) => dispatch(unfavoritedEvent(eventId));
  // console.log(event)

  return (
    <>
      <div className='single-event__container'>
        <NavLink className='single-event__img-container' to={`/events/${event.id}`}>
          <img alt='one-event' className='single-event__img' src={event.image} />
        </NavLink>
        <div className='single-event__details'>
          {/* <NavLink to={`/events/${event.id}`}> */}
          <p className='single-event__title'>{event.title}</p>
          {/* </NavLink> */}
          <p className='single-event__date'>{dateTime}</p>
        </div>
      </div>
    </>
  )
}


export default OneEvent
