import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getFavorites } from "../../store/events";

import './SearchPage.css'

function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents())
    dispatch(getFavorites())
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
    <>
      <div>{`Search found ${searches.length} results for the following:`}</div>
      <div>hello</div>
    </>
  )
}

export default SearchPage;