import React from 'react';

import { monthDate, numDate } from '../Utils/index';
import './EventBanner.css'

function EventBanner({ event }) {

  return (
    <div className='event-banner__container'>

      <div className='event-banner__img-div'>
        <img alt='event-img' className='event-banner__img' src={event.image}></img>
      </div>

      <div className='event-banner__container-right'>
        {/* <div className='event-banner__details'> */}
        <p className='event-banner__mon'>{monthDate(event.dateAndTime)}</p>
        <p className='event-banner__num'>{numDate(event.dateAndTime)}</p>
        <p className='event-banner__title'>{event.title}</p>
        <p className='event-banner__host'>by {event.host}</p>
        <p className='event-banner__price'>${event.ticketPrice}</p>
        {/* </div> */}
      </div>

      <div className='event-banner__container-bar'>
        <button className='event-banner__button'>Register</button>
      </div>

    </div>
  )
}

export default EventBanner;