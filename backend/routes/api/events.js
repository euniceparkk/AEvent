const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { restoreUser, requireAuth } = require('../../utils/auth')
const { Category, Event, Favorite, Ticket, User } = require('../../db/models')

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
	'/tickets',
	restoreUser,
	asyncHandler(async (req, res) => {
		const { user } = req
		const tickets = await Ticket.findAll({
			where: { userId: user.id },
			include: [Event],
		})
		const confirmedTickets = tickets.map((conTicket) => conTicket.Event)
		return res.json(confirmedTickets)
	})
)

// GET all User's favorites
router.get(
	'/favorites',
	restoreUser,
	asyncHandler(async (req, res) => {
		const { user } = req
		const favorites = await Favorite.findAll({
			where: { userId: user.id },
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
	requireAuth,
	asyncHandler(async (req, res) => {
		const eventId = req.params.id;
		const userId = req.user.id;
		const favorited = await Favorite.create({ eventId, userId });
		const event = await Event.findByPk(eventId);
		res.json(event)
	})
)

// DELETE User's favorited event
router.delete(
	'/:id/favorites',
	requireAuth,
	asyncHandler(async (req, res) => {
		const eventId = req.params.id;
		const userId = req.user.id;
		const unfavorite = await Favorite.findOne({ where: { eventId, userId } })
		await unfavorite.destroy()

		res.json(eventId)
	})
)

module.exports = router
