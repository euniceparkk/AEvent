import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getEvents } from '../../store/events'
import CategoryBar from '../CategoryBar'
import CategoryEvents from '../CategoryEvents'
import HomeBanner from '../HomeBanner'

import './HomePage.css'

function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className='home-page__wrapper'>
      <HomeBanner />
      <CategoryBar />
    </div>
  )
}

export default HomePage
