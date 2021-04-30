import React from 'react';
import { newDate } from '../Utils/index';

import './EventDetails.css'

function EventDetails({ event }) {
  return (
    <div className='event-details__container'>
      <div className='event-details__left'>
        <p>{event.description}</p>
      </div>

      <div className='event-details__right'>
        <p>Date And Time</p>
        <p>{newDate(event.dateAndTime)}</p>
        <p>Location</p>
        <p>{event.city}, {event.state}</p>
        <p>View Map</p>
      </div>
    </div>
  )
}

export default EventDetails;