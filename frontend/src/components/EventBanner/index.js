import React, { useState } from 'react';
import RegisterForm from '../RegisterForm';
import { Modal } from '../../context/Modal';

import { monthDate, numDate } from '../Utils/index';
import './EventBanner.css'

function EventBanner({ event }) {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true)
  }

  return (
    <div className='event-banner__container' >

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
        <button className='event-banner__button' onClick={onClick}>Register</button>
        {showModal && (
          <Modal className='register-modal' onClose={() => setShowModal(false)}>
            <RegisterForm event={event} />
          </Modal>
        )}
      </div>

    </div>
  )
}

export default EventBanner;