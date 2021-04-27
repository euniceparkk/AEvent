const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Category, Event, Favorite, Ticket, User } = require('../../db/models');

// GET all events
router.get('/', asyncHandler(async (req, res) => {
  const events = await Event.findAll({ include: Category });
  return res.json(events)
}))

router.get('/:id', asyncHandler(async function (req, res) {
  const event = await db.Event.findOne(req.params.id);
  return res.json(event);
}));

module.exports = router;