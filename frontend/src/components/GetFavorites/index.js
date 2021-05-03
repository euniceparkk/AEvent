import React, { useEffect } from 'react';
import { deleteFavorites } from '../../store/events';
import { useDispatch, useSelector } from 'react-redux';


import './GetFavorites.css'

function GetFavorites({ eventId, title, date, host, price, image, change }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id

  const deleteOneFav = () => {
    dispatch(deleteFavorites({ eventId, userId }))
    change();
  }

  // console.log('user id', favorite)
  console.log('favoriteid', eventId)
  return (
    <div className='one-favorite__container'>

      <div className='favorite-details__container'>
        <p className='title-text'>{title}</p>
        <p className='date-text'>{date}</p>
        <p className='host-text'>{host}</p>
        <p className='price-text'>Starts at ${price}</p>
        <button className='click-delete__btn' onClick={deleteOneFav}>delete</button>
      </div>

      <div className='favorite-image__container'>
        <img alt='favorite-image' className='favorite-img' src={image} />
      </div>

    </div>
  )
}

export default GetFavorites;