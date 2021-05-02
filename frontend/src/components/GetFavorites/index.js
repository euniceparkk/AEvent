import React from 'react';


import './GetFavorites.css'

function GetFavorites({ title, date, host, price, image }) {

  return (
    <>
      <p>{title}</p>
      <p>{date}</p>
      <p>{host}</p>
      <p>Prices at ${price}</p>
      <img alt='favorite-image' className='favorite-img' src={image} />
    </>
  )
}

export default GetFavorites;