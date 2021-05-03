import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from '../../store/events';
import GetFavorites from '../GetFavorites';
import { newDate } from '../Utils';
import './FavoritePage.css';

function FavoritePage() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)

  const allFavorites = useSelector(state => state.events.favorites);

  const [content, setContent] = useState(true)

  useEffect(() => {
    dispatch(getFavorites(userId))
    // console.log('inside', getFavorites)
  }, [dispatch, userId, content])

  // console.log('favorites!!!', allFavorites)

  const change = () => {
    setContent(!content)
  }

  return (
    <>
      <div className='all-favorites__container'>
        <div className='all-favorites__small-container'>

          <div className='likes-text'>Likes</div>

          <div className='favorites-event__container'>
            {allFavorites.map((favorite) => {
              const longDate = newDate(favorite.dateAndTime)
              return (
                <GetFavorites
                  key={favorite.id}
                  eventId={favorite.id}
                  title={favorite.title}
                  date={longDate}
                  host={favorite.host}
                  price={favorite.ticketPrice}
                  image={favorite.image}
                  change={change}
                />
              )
            })}
          </div>
        </div>

      </div>
    </>
  )
}

export default FavoritePage;