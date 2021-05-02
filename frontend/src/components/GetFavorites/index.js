import React from 'react';


import './GetFavorites.css'

function GetFavorites({ title, date, host, price, image }) {

  return (
    <div className='one-favorite__container'>

      <div className='favorite-details__container'>
        <p className='title-text'>{title}</p>
        <p className='date-text'>{date}</p>
        <p className='host-text'>{host}</p>
        <p className='price-text'>Starts at ${price}</p>
      </div>

      <div className='favorite-image__container'>
        <img alt='favorite-image' className='favorite-img' src={image} />
      </div>

    </div>
  )
}

export default GetFavorites;