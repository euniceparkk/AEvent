import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getEvents } from '../../store/events'
// import { getTickets, getFavorites } from '../../store/events';

import Category from '../Category'
import CategoryEvents from '../CategoryEvents'

import './CategoryBar.css'

function CategoryBar() {
	const [categoryEventId, setCategoryEventId] = useState(0)
	// const sessionUser = useSelector(state => state.session.user);
	// const tickets = useSelector(state => state.events.tickets);
	// const favorites = useSelector(state => state.events.favorites);
	// const events = useSelector((state) => Object.values(state.events.events))

	const handleCategoryChange = (e) => {
		console.log('in the bar', e.target.id)
		setCategoryEventId(e.target.id)
	}

	// GET all categories from events
	const allCategories = useSelector((state) =>
		Object.values(state.events.events.categories)
	)
	// const categoryNames = events.map(event => event.Category.category);

	console.log('allCategories', allCategories)

	// If data fails, return null
	if (!allCategories) {
		return null
	}

	// Returning props to children components
	return (
		<div className='category-component'>
			<h1>Popular In</h1>
			<div className='category-bar'>
				<div className='categories-container'>
					{allCategories.map((category) => {
						return (
							<div className='category-bar__links' key={category.id} id={category.id}>
								<Category
									handleCategoryChange={handleCategoryChange}
									categoryId={category.id}
									categoryName={category.category}
								/>
							</div>
						)
					})}
				</div>
				<CategoryEvents categoryEventId={categoryEventId} />
			</div>
		</div>
	)
}

export default CategoryBar
