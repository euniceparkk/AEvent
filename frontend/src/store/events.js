// Action Verbs----------------------------------------------
const LOAD_EVENTS = 'events/LOAD_EVENTS';
const LOAD_TICKETS = 'events/LOAD_TICKETS';
const LOAD_FAVORITES = 'events/LOAD_FAVORITES'

// Action Creators-------------------------------------------
const loadEvents = events => ({
  type: LOAD_EVENTS,
  events
});

const loadTickets = tickets => ({
  type: LOAD_TICKETS,
  tickets
});

const loadFavorites = favorites => ({
  type: LOAD_FAVORITES,
  favorites
})

// Thunks-------------------------------------------------
// GET all events
export const getEvents = () => async dispatch => {
  const response = await fetch(`/api/events`);

  if (response.ok) {
    const events = await response.json();
    dispatch(loadEvents(events))
  }
}

// GET all tickets
export const getTickets = () => async dispatch => {
  const response = await fetch(`/api/events/tickets`);

  if (response.ok) {
    const tickets = await response.json();
    dispatch(loadTickets(tickets))
  }
}

// GET all favorites
export const getFavorites = () => async dispatch => {
  const response = await fetch(`/api/events/favorites`);

  if (response.ok) {
    const favorites = await response.json();
    dispatch(loadFavorites(favorites))
  }
}

// Reducers------------------------------------------------
const initialState = {
  events: [],
  tickets: [],
  favorites: [],
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENTS: {
      const allEvents = {};
      action.events.forEach(event => {
        allEvents[event.id] = event;
      });
      return {
        ...allEvents,
        ...state,
        events: action.events,
      }
    }
    case LOAD_TICKETS: {
      const allTickets = {};
      action.tickets.forEach(ticket => {
        allTickets[ticket.id] = ticket;
      });
      return {
        ...state,
        tickets: action.tickets,
      }
    }
    case LOAD_FAVORITES: {
      const allFavorites = {};
      action.favorites.forEach(favorite => {
        allFavorites[favorite.id] = favorite;
      });
      return {
        ...state,
        favorites: action.favorites
      }
    }

    default:
      return state;
  }
}

export default eventsReducer;