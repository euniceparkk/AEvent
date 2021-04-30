import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as eventsReducer from '../../store/events';

import './EventPage.css'

import EventBanner from '../EventBanner';
import EventDetails from '../EventDetails';

function EventPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(eventsReducer.getOneEvent(id));
    // console.log('inside here', eventsReducer)
  }, [dispatch, id])

  const event = useSelector((state) => state.events.currentEvent)

  // console.log('events!!!', event);

  if (!event) {
    return null;
  };


  return (
    <div className='event-page__wrapper'>
      <EventBanner event={event} />
      <EventDetails event={event} />
    </div>
  )
}

export default EventPage;