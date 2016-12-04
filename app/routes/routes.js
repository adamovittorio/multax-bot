var router  = require('express').Router();

//middleware
var isRegistered = require('./middleware/isRegistered'),
    isApproved = require('./middleware/isApproved');

router.get('/reports', isRegistered, isApproved, require('./reports'));

module.exports = router;
