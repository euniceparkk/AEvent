import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents } from '../../store/events';
// import { getTickets, getFavorites } from '../../store/events';

import Category from '../Category';

import './CategoryBar.css';

function CategoryBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
    // dispatch(getTickets());
    // dispatch(getFavorites());
  }, [dispatch])

  // const sessionUser = useSelector(state => state.session.user);
  // const tickets = useSelector(state => state.events.tickets);
  // const favorites = useSelector(state => state.events.favorites);
  const events = useSelector(state => state.events.events);

  // GET all categories from events
  const allCategories = events.map(event => event.Category)
  // const categoryNames = events.map(event => event.Category.category);

  console.log("allCategories", allCategories)

  // const oneCategory = useSelector(state => {
  //   const categories = Object.values(state.events.events)
  //   return categories;
  // });

  // const categories = [];
  // categoryNames.forEach(category => {
  //   if (!categories.includes(category)) {
  //     categories.push(category);
  //   }
  // })

  // If data fails, return null
  if (!allCategories) {
    return null;
  }

  // Returning props to children components
  return (
    <div className='category-component'>
      <h1>Popular In</h1>
      <div className='category-bar'>
        <div className='categories-container'>
          {allCategories.map((category) => {
            return (
              <div className='category-bar__links'>
                <Category categoryId={category.id} categoryName={category.category} />
              </div>
            )
          })}
        </div>
      </div>
    </div>

  );

}

export default CategoryBar;