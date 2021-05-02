const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { restoreUser, requireAuth } = require('../../utils/auth')
const { Category, Event, Favorite, Ticket, User } = require('../../db/models')
const { Op } = require('sequelize');

// GET all events
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const events = await Event.findAll()
		const categories = await Category.findAll()
		return res.json({ events, categories })
	})
)

// GET one event
router.get(
	'/:id',
	asyncHandler(async function (req, res) {
		const event = await Event.findByPk(req.params.id)
		return res.json(event)
	})
)

// GET all User's tickets
router.get(
	'/tickets/:id',
	requireAuth,
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		const tickets = await Ticket.findAll({
			where: { userId: id },
			include: [Event],
		})
		const confirmedTickets = tickets.map((conTicket) => conTicket.Event)
		return res.json(confirmedTickets)
		// console.log('user', id)
	})
)

// GET all User's favorites
router.get(
	'/favorites/:id',
	requireAuth,
	asyncHandler(async (req, res) => {
		const id = req.params.id;
		// const { user } = req
		const favorites = await Favorite.findAll({
			where: { userId: id },
			include: [Event],
		})
		const userFav = favorites.map((fav) => fav.Event)
		return res.json(userFav)
	})
)


// POST user registering for event
router.post(
	'/:id/register',
	requireAuth,
	asyncHandler(async (req, res) => {
		const eventId = req.params.id;
		const userId = req.user.id;

		const registerEvent = await Ticket.create({ eventId, userId });
		const event = await Event.findByPk(eventId);
		res.json(event);
	})
)

// POST User's favorite events
router.post(
	'/:id/favorited',
	asyncHandler(async (req, res) => {
		const { eventId, userId } = req.body;
		content = { eventId, userId };
		const favorited = await Favorite.create(content);
		return res.json(favorited);

		// const eventId = req.params.id;
		// const userId = req.user.id;
		// const favorited = await Favorite.create({ eventId, userId });
		// const event = await Event.findByPk(eventId);
		// res.json(event)
	})
)

// DELETE User's favorited event
router.delete(
	'/:id/favorites',
	asyncHandler(async (req, res) => {
		const { eventId, userId } = req.body;

		const unfav = await Favorite.destroy({
			where: {
				eventId,
				userId
			}
		});
		res.json(unfav)
	})
)

// POST 'search' for Event
router.post('/search', asyncHandler(async (req, res) => {
	const { query } = req.body
	const results = await Event.findAll({
		where: {
			title: {
				[Op.iLike]: `%${query}%`
			}
		}
	})

	res.json(results)
}))




module.exports = router
