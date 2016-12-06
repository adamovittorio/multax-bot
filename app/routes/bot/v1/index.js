const router = require('express').Router();

//middleware
const isRegistered = require('../../../middleware').isRegistered
const isApproved = require('../../../middleware').isApproved

router.use(
  isRegistered,
  isApproved) // these middlewares are used for all the routes under this statement

router.use(require('./reports'))

// standard 404 for the remaining paths
router.use((req, res) => res.sendStatus(404))

module.exports = router;
