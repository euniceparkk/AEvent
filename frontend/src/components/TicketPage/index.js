import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


import { getTickets, getFavorites } from '../../store/events';
import GetTickets from '../GetTickets';

import { newDate, monthDate, numDate } from '../Utils';
import './TicketPage.css';

function TicketPage() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const sessionUser = useSelector(state => state.session.user);

  const allFavorites = useSelector(state => state.events.favorites);
  const allTickets = useSelector(state => state.events.tickets);

  // const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(getTickets(userId))
    dispatch(getFavorites(userId))

    // console.log('inside', getFavorites)
  }, [dispatch, userId])

  // console.log('all favorites', allFavorites.length)
  // console.log('tickets!!!', allTickets)
  // console.log('username!!!!', sessionUser)
  // console.log('favorites!!!', allFavorites)


  return (
    <>
      <div className='all-tickets__container'>
        <div className='all-tickets__small-container'>

          <div className='ticket-profile__container'>

            <div className='ticket-profile__img-container'>
              <img className='ticket-profile__img' alt='profile icon' src='https://aevent-project.s3.amazonaws.com/00-user-img.svg'></img>
            </div>

            <div className='ticket-profile__username-container'>
              <p className='ticket-profile__username'>{sessionUser.username}</p>
            </div>

            <div className='ticket-profile__count'>
              <NavLink className='ticket-profile__tickets-link' to='/tickets'>
                <p>{allTickets.length} orders</p>
              </NavLink>
              <p className='ticket-profile__tickets-dot'>•</p>
              <NavLink className='ticket-profile__favorites-link' to='/favorites'>
                <p>{allFavorites.length} likes</p>
              </NavLink>
            </div>

          </div>

          <div className='tickets-event__container'>
            <p className='order-text'>Orders</p>
            {allTickets.map((ticket) => {
              const longDate = newDate(ticket.dateAndTime)
              const month = monthDate(ticket.dateAndTime)
              const day = numDate(ticket.dateAndTime)
              return (
                <GetTickets
                  key={ticket.id}
                  month={month}
                  day={day}
                  image={ticket.image}
                  title={ticket.title}
                  price={ticket.ticketPrice}
                  host={ticket.host}
                  longDate={longDate}
                />
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default TicketPage;