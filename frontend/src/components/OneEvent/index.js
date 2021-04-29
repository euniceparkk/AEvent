import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './OneEvent.css'

// import { favoritedEvent, unfavoritedEvent } from '../../store/events';

function OneEvent({ user, event, dateTime, favorites }) {
	// const dispatch = useDispatch();
	// const addFavorite = (eventId) => dispatch(favoritedEvent(eventId));
	// const deleteFavorite = (eventId) => dispatch(unfavoritedEvent(eventId));
	console.log(event)

	return (
		<>
			<div>{event.title}</div>
			<div className='single-event'>
				<div className='single-event__link'>
					<div single-event__image-container>
						<img alt='one-event' className='single-event__image' src={event.image} />
					</div>
					<div className='single-event__details'>
						<p className='single-event__title'>{event.title}</p>
						<p className='single-event__date'>{dateTime}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default OneEvent
