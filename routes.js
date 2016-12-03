var router  = require('express').Router();

//middleware
var isRegistered = require('./middleware/isRegistered'),
    isApproved = require('./middleware/isApproved');

router.get('/reports', isRegistered, isApproved, require('./routes/reports.js'));
router.post('/document/upload/front', require('./routes/frontUpload.js'));

module.exports = router;
