import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// import { getTickets } from '../../store/events';
import { getEvents, getFavorites } from '../../store/events'
import OneEvent from '../OneEvent'
import { newDate } from '../Utils/index'

import './CategoryEvents.css'

function CategoryEvents({ categoryEventId }) {
	// const { id } = useParams();
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getFavorites())
	// }, [dispatch])

	const sessionUser = useSelector((state) => state.session.user)
	// const tickets = useSelector(state => state.events.tickets);
	const favorites = useSelector((state) => state.events.favorites)
	const events = useSelector((state) => Object.values(state.events.events))

	const categoryEvents = events.filter((event) => {
		// console.log('cat id, ', event.categoryId)
		// console.log('cat event id, ', Number(categoryEventId))
		if (event.categoryId === Number(categoryEventId)) {
			return event
		}
	})

	// const oneEvent = events[id];
	// console.log('category events on click', categoryEvents)

	return (
		<div className='events-container'>
			{categoryEvents &&
				categoryEvents.map((event) => {
					const dateTime = newDate(event.dateAndTime)
					return (
						<OneEvent
							key={event.id}
							user={sessionUser}
							event={event}
							dateTime={dateTime}
							favorites={favorites}
						/>
					)
				})}
		</div>
	)
}

export default CategoryEvents
