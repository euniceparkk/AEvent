import React from 'react';


import './GetTickets.css'

function GetTickets({ shortDate, image, host, title, longDate, price }) {

  return (
    <>
      <p>{shortDate}</p>
      <img alt='ticket-image' className='ticket-img' src={image} />
      <p>{title}</p>
      <p>{host}</p>
      <p>${price}</p>
      <p>{longDate}</p>
    </>
  )
}

export default GetTickets;