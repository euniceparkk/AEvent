import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getEvents } from '../../store/events'
import CategoryBar from '../CategoryBar'
import CategoryEvents from '../CategoryEvents'

import './HomePage.css'

function HomePage() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getEvents())
	}, [dispatch])

	return (
		<div className='home-page__wrapper'>
			<h1>Home Page</h1>
			<CategoryBar />
		</div>
	)
}

export default HomePage
