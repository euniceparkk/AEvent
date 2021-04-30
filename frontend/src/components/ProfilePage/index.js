import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { getFavorites, getTickets } from '../../store/events';
import GetFavorites from '../GetFavorites';
import GetTickets from '../GetTickets';

import { newDate, monNumDate } from '../Utils/';


function ProfilePage() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)

  const allTickets = useSelector(state => state.events.tickets);
  const allFavorites = useSelector(state => state.events.favorites);

  // const [userTicket, setUserTicket] = useState();
  // const [userFav, setUserFav] = useState();

  // const 
  useEffect(() => {
    dispatch(getTickets(userId))
    dispatch(getFavorites(userId))
    // console.log('inside', getFavorites)
  }, [dispatch, userId])


  console.log('tickets!!!', allTickets)
  console.log('favorites!!!', allFavorites)


  return (
    <>
      <div className='all-tickets__container'>
        <p>Orders</p>
        {allTickets.map((ticket) => {
          const longDate = newDate(ticket.dateAndTime)
          const shortDate = monNumDate(ticket.dateAndTime)
          return (
            <GetTickets
              key={ticket.id}
              // ticket={ticket}
              shortDate={shortDate}
              image={ticket.image}
              title={ticket.title}
              price={ticket.ticketPrice}
              host={ticket.host}
              longDate={longDate}
            />
          )
        })}
      </div>

      <div className='all-favorites__container'>
        <p>Likes</p>
        {allFavorites.map((favorite) => {
          const longDate = newDate(favorite.dateAndTime)
          return (
            <GetFavorites
              key={favorite.id}
              title={favorite.title}
              date={longDate}
              host={favorite.host}
              price={favorite.ticketPrice}
              image={favorite.image}
            />
          )
        })}
      </div>
    </>
  )
}

export default ProfilePage;