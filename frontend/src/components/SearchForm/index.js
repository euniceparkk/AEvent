import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadSearch } from '../../store/events';


function SearchForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector(state => state.events.events)

  const [query, setQuery] = useState('');

  const array = [];

  for (let key in events) {
    if (key !== 'categories' && events[key].title.toLowerCase().includes(query.toLowerCase())) {
      // console.log('eventsss!', events[key])
      // console.log('key here', Number(key))
      array.push(events[key])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadSearch(array));
    history.push('/events/search')
    // console.log('arrayy', array)
    // return (
    // < Redirect to='/events/search' searchResults={array} />
    // <SearchBar searchResults={array} />
    // )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='search-bar'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search events'
          required
        />
        <button
          type='submit'
        ></button>
      </form>
    </div>
  );
}

export default SearchForm;
