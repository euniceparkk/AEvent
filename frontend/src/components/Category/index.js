import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import CategoryEvents from '../CategoryEvents'
// import CategoryEvents from '../CategoryEvents';

import './Category.css'

function Category({ categoryName, categoryId, handleCategoryChange }) {
	return (
		<>
			<div
				onClick={handleCategoryChange}
				id={categoryId}
				className='category-bar__link'
			>
				<h3 className='category' id={categoryId} onClick={handleCategoryChange}>
					{categoryName}
				</h3>
			</div>
		</>
	)
}

export default Category
