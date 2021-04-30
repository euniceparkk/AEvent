import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import CategoryEvents from '../CategoryEvents'
// import CategoryEvents from '../CategoryEvents';

import './Category.css'

function Category({ categoryName, categoryId, handleCategoryChange }) {
	return (
		<>
			<div
				className='category-bar__link'
				onClick={handleCategoryChange}
				id={categoryId}
			>
				<h3 className='category' id={categoryId} onClick={handleCategoryChange}>
					{categoryName}
				</h3>
			</div>
		</>
	)
}

export default Category
