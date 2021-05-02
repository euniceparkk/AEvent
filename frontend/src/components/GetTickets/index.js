import React from 'react';


import './GetTickets.css'

function GetTickets({ month, day, image, host, title, longDate, price }) {

  return (
    <div className='one-ticket__container'>

      <div className='ticket-date'>
        <p className='month-text'>{month}</p>
        <p className='day-text'>{day}</p>
      </div>

      {/* <NavLink className='ticket-image__container' to='/events/'> */}
      <div className='ticket-image__container'>
        <img alt='ticket-image' className='ticket-img' src={image} />
      </div>
      {/* </NavLink> */}

      <div className='ticket-details__container'>
        <div className='ticket-title'>{title}</div>
        <div className='ticket-long-date'>{longDate}</div>
        <div className='ticket-host'>by {host}</div>
        <div className='ticket-price'>order placed ${price}</div>
      </div>

    </div>
  )
}

export default GetTickets;