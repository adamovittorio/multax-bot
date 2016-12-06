const router = require('express').Router()
const bot = require('./bot/v1')

router.use('/bot/v1/', bot)

module.exports = router
