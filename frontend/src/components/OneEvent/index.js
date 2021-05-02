import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './OneEvent.css'
import { addFavorites } from '../../store/events';


function OneEvent({ user, event, dateTime, favorites }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(event => event.session.user)

  let userId;
  if (sessionUser) {
    userId = sessionUser.id;
  }

  const eventId = event.id;

  const [favorite, setFavorite] = useState('');

  const addOneFav = () => {
    dispatch(addFavorites({ eventId, userId }))
  }


  return (
    <>
      <div className='single-event__container'>
        <NavLink className='single-event__img-container' to={`/events/${event.id}`}>
          <img alt='one-event' className='single-event__img' src={event.image} />
        </NavLink>
        <button onClick={addOneFav}>Fav</button>
        {/* <button onClick={deleteOneFav}>Delete</button> */}
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
