import { csrfFetch } from './csrf'

/************* Action Verbs **************************************************************/
const LOAD_EVENTS = 'events/LOAD_EVENTS'
const LOAD_TICKETS = 'events/LOAD_TICKETS'
const LOAD_FAVORITES = 'events/LOAD_FAVORITES'

const ADD_FAVORITE = 'events/ADD_FAVORITE'

const DELETE_FAVORITE = 'events/DELETE_FAVORITE'

const LOAD_CATEGORIES = 'events/LOAD_CATEGORIES'
const LOAD_EVENT = 'events/LOAD_EVENT'
const REGISTER = 'events/REGISTER'
const LOAD_SEARCH = 'events/LOAD_SEARCH'

/************* Action Creators **************************************************************/
const loadEvents = (events) => ({
	type: LOAD_EVENTS,
	events,
})

const loadOneEvent = (event) => ({
	type: LOAD_EVENT,
	event,
})

const loadTickets = (tickets) => ({
	type: LOAD_TICKETS,
	tickets,
})

const loadFavorites = (favorites) => ({
	type: LOAD_FAVORITES,
	favorites,
})

const addFavorite = (favorite) => ({
	type: ADD_FAVORITE,
	favorite,
})

const deleteFavorite = (favorite) => ({
	type: DELETE_FAVORITE,
	favorite,
})

const loadCategoryIds = (categories) => ({
	type: LOAD_CATEGORIES,
	categories,
})

const register = (event) => ({
	type: REGISTER,
	event,
})

export const loadSearch = (searchResults) => ({
	type: LOAD_SEARCH,
	searchResults,
})

/******************** Thunks **************************************************************/
// GET all events
export const getEvents = () => async (dispatch) => {
	const response = await csrfFetch(`/api/events`)

	if (response.ok) {
		const events = await response.json()
		// console.log('events', events)
		dispatch(loadEvents(events))
	}
}

// GET one event
export const getOneEvent = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/events/${id}`)

	if (response.ok) {
		const event = await response.json()
		dispatch(loadOneEvent(event))
	}
}

// GET all tickets
export const getTickets = (id) => async (dispatch) => {
	const response = await fetch(`/api/events/tickets/${id}`)

	if (response.ok) {
		const tickets = await response.json()
		dispatch(loadTickets(tickets))
	}
}

// GET all category Ids
export const getCategoryIds = () => async (dispatch) => {
	const response = await fetch(`/api/events/category`)

	if (response.ok) {
		const categories = await response.json()
		dispatch(loadCategoryIds(categories))
	}
}

// GET all favorites
export const getFavorites = (id) => async (dispatch) => {
	const response = await fetch(`/api/events/favorites/${id}`)

	if (response.ok) {
		const favorites = await response.json()
		dispatch(loadFavorites(favorites))
	}
}

// POST a registration
export const registerEvent = (data) => async (dispatch) => {
	const eventId = data.id

	// Cross Site Request Forgeries Middleware
	const response = await csrfFetch(`/api/events/${eventId}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ eventId }),
	});

	if (response.ok) {
		const event = await response.json()
		dispatch(register(event))
	}
}

// POST a favorite
export const addFavorites = (data) => async (dispatch) => {
	const { eventId, userId } = data;

	// Cross Site Request Forgeries Middleware
	const response = await csrfFetch(`/api/events/${eventId}/favorited`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ eventId, userId }),
	})

	if (!response.ok) throw response;
	const favorite = await response.json();
	dispatch(addFavorite(favorite))
	return favorite;
}

// DELETE a favorite
export const deleteFavorites = (data) => async (dispatch) => {
	const { eventId, userId } = data;
	const response = await csrfFetch(`/api/events/${eventId}/favorites`, {
		method: 'DELETE',
		body: JSON.stringify({ eventId, userId })
	})

	if (!response.ok) throw response;
	const favorite = await response.json();
	dispatch(deleteFavorite(favorite))
	return favorite;
}

// POST a search
// export const searchEvents = (payload) => async dispatch => {
// 	const response = await csrfFetch(`/api/events/search`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ payload }),
// 	});

// 	if (response.ok) {
// 		const term = await response.json();
// 		dispatch(loadSearch(term));
// 	}
// }

/******************** Reducers **************************************************************/
const initialState = {
	events: { categories: {} },
	tickets: [],
	favorites: [],
	searchResults: [],
}

const eventsReducer = (state = initialState, action) => {
	let newState

	switch (action.type) {
		case LOAD_EVENTS: {
			const allEvents = {}
			const allCategories = {}
			action.events.events.forEach((event) => {
				console.log(event)
				allEvents[event.id] = event
			})
			action.events.categories.forEach((category) => {
				allCategories[category.id] = category
			})
			return {
				...state,
				events: { ...allEvents, categories: { ...allCategories } },
			}
		}
		case LOAD_TICKETS: {
			const allTickets = {}
			action.tickets.forEach((ticket) => {
				// console.log('ticketId', ticket.id)
				allTickets[ticket.id] = ticket
			})
			return {
				...state,
				tickets: action.tickets,
			}
		}
		case LOAD_FAVORITES: {
			const allFavorites = {}
			action.favorites.forEach((favorite) => {
				allFavorites[favorite.id] = favorite
			})
			return {
				...state,
				favorites: action.favorites,
			}
		}
		case LOAD_CATEGORIES: {
			const allCategoryIds = {}
			action.categories.forEach((category) => {
				allCategoryIds[category.id] = category
			})
			return {
				...state,
				categories: action.categories,
			}
		}
		case LOAD_SEARCH: {
			return {
				...state,
				searchResults: action.searchResults
			};
		}
		case ADD_FAVORITE: {
			const newState = {
				...state,
				[action.favorite.id]: action.favorite
			}
			return newState;
		}
		case DELETE_FAVORITE: {
			const newState = { ...state };
			// console.log(newState)
			delete newState[action.favorite];
			return newState;
		}
		case LOAD_EVENT: {
			newState = { ...state }
			const currentEvent = action.event
			return {
				...newState,
				currentEvent: currentEvent
			}
		}
		case REGISTER: {
			newState = { ...state }
			const newTicket = [...newState.tickets, action.event]
			newState.tickets = newTicket;
			return newState;
		}

		default:
			return state
	}
}

export default eventsReducer
