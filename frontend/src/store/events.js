import { csrfFetch } from './csrf'

/************* Action Verbs **************************************************************/
const LOAD_EVENTS = 'events/LOAD_EVENTS'
const LOAD_TICKETS = 'events/LOAD_TICKETS'
const LOAD_FAVORITES = 'events/LOAD_FAVORITES'
const FAVORITED = 'events/FAVORITED'
const UNFAVORITED = 'events/UNFAVORITED'
const LOAD_CATEGORIES = 'events/LOAD_CATEGORIES'
const LOAD_EVENT = 'events/LOAD_EVENT'
const REGISTER = 'events/REGISTER'

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

const favorited = (event) => ({
	type: FAVORITED,
	event,
})

const unfavorited = (eventId) => ({
	type: UNFAVORITED,
	eventId,
})

const loadCategoryIds = (categories) => ({
	type: LOAD_CATEGORIES,
	categories,
})

const register = (event) => ({
	type: REGISTER,
	event,
})

/******************** Thunks **************************************************************/
// GET all events
export const getEvents = () => async (dispatch) => {
	const response = await csrfFetch(`/api/events`)

	if (response.ok) {
		const events = await response.json()
		console.log('events', events)
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
export const getTickets = () => async (dispatch) => {
	const response = await fetch(`/api/events/tickets`)

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
export const getFavorites = () => async (dispatch) => {
	const response = await fetch(`/api/events/favorites`)

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
export const favoritedEvent = (data) => async (dispatch) => {
	const eventId = data.id

	// Cross Site Request Forgeries Middleware
	const response = await csrfFetch(`/api/events/${eventId}/favorited`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ eventId }),
	})

	if (response.ok) {
		const event = await response.json()
		dispatch(favorited(event))
	}
}

// DELETE a favorite
export const unfavoritedEvent = (eventId) => async (dispatch) => {
	const response = await csrfFetch(`/api/events/${eventId}/favorites`, {
		method: 'DELETE',
	})

	if (response.ok) {
		const unfavorite = await response.json()
		dispatch(unfavorited(unfavorite))
	}
}

/******************** Reducers **************************************************************/
const initialState = {
	events: { categories: {} },
	tickets: [],
	favorites: [],
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
		case FAVORITED: {
			newState = { ...state }
			const newFavorite = [...newState.favorites, action.event]
			newState.favorites = newFavorite
			return newState
		}
		case UNFAVORITED: {
			newState = { ...state }
			const newFavorite = newState.favorites.filter(
				(event) => event.id.toString() !== action.eventId.toString()
			)

			newState.favorites = newFavorite
			return newState
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
