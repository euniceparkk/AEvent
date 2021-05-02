import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events";
import OneEvent from "../OneEvent";
import { newDate } from '../Utils/index'

import './SearchPage.css'

function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  const searches = useSelector(state => state.events.searchResults);

  console.log('search Results', searches)

  // let content;
  // if (searches.length > 0) {
  //   content = (<OneEvent event={searches} />)
  // } else {
  //   content = (<div>No searches found.</div>)
  // }

  // console.log('events!00000!!!', events)

  return (
    <div className='search-page__container'>

      <div className='search-found__text'>
        {`There are ${searches.length} event results found for the following:`}
      </div>

      <div className='search-page__small-container'>
        {searches &&
          searches.map((oneSearch) => {
            const dateTime = newDate(oneSearch.dateAndTime)
            return (
              <OneEvent event={oneSearch} dateTime={dateTime} />
              // console.log('onesearch', oneSearch)
            )
          })}
      </div>

    </div>
  )
}

export default SearchPage;