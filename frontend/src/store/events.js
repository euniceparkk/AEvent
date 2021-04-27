// Action Verbs
const LOAD = 'EVENTS/LOAD';
// const LOAD_TICKETS = 'EVENTS/TICKETS';

// Action Creators
const loadEvents = events => ({
  type: LOAD,
  events
})

// Thunks
// GET all events
export const getEvents = () => async dispatch => {
  const response = await fetch(`/api/events`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadEvents(data.events))
  }
}

// Event Reducer
const initialState = {
  eventsList: {},
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allEvents = [];
      action.events.forEach(event => {
        allEvents.push(event);
      });
      return {
        ...state,
        ...action.events,
        allEvents
      }

    // case SOMETHING: {

    // }
    default:
      return state;
  }
}

export default eventsReducer;