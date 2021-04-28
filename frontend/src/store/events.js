import { csrfFetch } from "./csrf";

// Action Verbs----------------------------------------------
const LOAD_EVENTS = 'events/LOAD_EVENTS';
const LOAD_TICKETS = 'events/LOAD_TICKETS';
const LOAD_FAVORITES = 'events/LOAD_FAVORITES';
const FAVORITED = 'events/FAVORITED';
const UNFAVORITED = 'events/UNFAVORITED';

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
});

const favorited = event => ({
  type: FAVORITED,
  event
});

const unfavorited = eventId => ({
  type: UNFAVORITED,
  eventId
});

// Thunks-------------------------------------------------
// GET all events
export const getEvents = () => async dispatch => {
  const response = await fetch(`/api/events`);

  if (response.ok) {
    const events = await response.json();
    dispatch(loadEvents(events))
  }
};

// GET all tickets
export const getTickets = () => async dispatch => {
  const response = await fetch(`/api/events/tickets`);

  if (response.ok) {
    const tickets = await response.json();
    dispatch(loadTickets(tickets))
  }
};

// GET all favorites
export const getFavorites = () => async dispatch => {
  const response = await fetch(`/api/events/favorites`);

  if (response.ok) {
    const favorites = await response.json();
    dispatch(loadFavorites(favorites))
  }
};

// POST a favorite
export const favoritedEvent = (data) => async dispatch => {
  const eventId = data.id;

  // Cross Site Request Forgeries Middleware
  const response = await csrfFetch(`/api/events/${eventId}/favorited`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ eventId }),
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(favorited(event));
  }
};

// DELETE a favorite
export const unfavoritedEvent = (eventId) => async dispatch => {
  const response = await csrfFetch(`/api/events/${eventId}/favorites`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const unfavorite = await response.json();
    dispatch(unfavorited(unfavorite))
  }
};

// Reducers------------------------------------------------
const initialState = {
  events: [],
  tickets: [],
  favorites: [],
}

const eventsReducer = (state = initialState, action) => {
  let newState;

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
    case FAVORITED: {
      newState = { ...state }
      const newFavorite = [...newState.favorites, action.event]
      newState.favorites = newFavorite;
      return newState;
    }
    case UNFAVORITED: {
      newState = { ...state }
      const newFavorite = newState.favorites.filter(
        (event) => event.id.toString() !== action.eventId.toString());

      newState.favorites = newFavorite;
      return newState;
    }

    default:
      return state;
  }
}

export default eventsReducer;