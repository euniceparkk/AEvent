import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import * as eventsReducer from '../../store/events';

function RegisterForm({ event }) {
  // const dispatch = useDispatch();
  // console.log('events', event)

  const eventId = event.id;
  const userId = useSelector(state => state.session.user.id)
  console.log('userid', eventId)

  
  // useEffect(() => {
  //   dispatch(eventsReducer.registerEvent(event.id))
  // }, [dispatch, event.id])


  // const registeredTickets = useSelector((state) => state.events.tickets);
  // console.log('registered Tickets', registeredTickets)
  // const ticketEventIds = registeredTickets.map(event => event.id);
  // console.log('ticket ids', ticketEventIds);
  return (
    <div>
      <h1>hi</h1>
    </div>
  )

}

export default RegisterForm;