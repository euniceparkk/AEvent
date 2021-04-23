// // Requires for testing User Auth Middlewares
// const asyncHandler = require('express-async-handler'); 
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

module.exports = router;


// ROUTES for testing User Auth Middlewares
router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});

// // GET /api/set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     },
//   })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // Checking restoreUser Middleware. If req.user key is populating by middleware properly
// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // Checking requireAuth Middleware. Returns error if no session user. Otherwise returns session user's info.
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// module.exports = router;