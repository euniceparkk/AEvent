import React from 'react';
import { newDate } from '../Utils/index';

import './EventDetails.css'

function EventDetails({ event }) {
  return (
    <div className='event-details__container'>
      <div className='event-details__container-left'>
        <p className='event-details__des-title'>Description</p>
        <p className='event-details__des-body'>{event.description}</p>
      </div>

      <div className='event-details__container-right'>

        <div className='date-div'>
          <p className='event-details__date-text'>Date And Time</p>
          <p className='event-details__date-fill'>{newDate(event.dateAndTime)}</p>
        </div>

        <div className='location-div'>
          <p className='event-details__location-text'>Location</p>
          <p className='event-details__location-fill'>{event.city}, {event.state}</p>
          <p className='event-details__map-text'>View Map</p>
        </div>

      </div >
    </div >
  )
}

export default EventDetails;