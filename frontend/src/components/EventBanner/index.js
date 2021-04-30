import React from 'react';

import { monthDate } from '../Utils/index';
import './EventBanner.css'

function EventBanner({ event }) {

  return (
    <div className='event-banner__container'>
      <img alt='event-img' className='event-banner__img-blur' src={event.image}></img>
      <img alt='event-img' className='event-banner__img' src={event.image}></img>
      <div className='event-banner__details'>
        <p>{monthDate(event.dateAndTime)}</p>
        <p>{event.title}</p>
        <p>by {event.host}</p>
        <p>${event.ticketPrice}</p>
      </div>
      <div className='event-banner__bar'>
        <button className>Modal here</button>
      </div>
    </div>
  )
}

export default EventBanner;