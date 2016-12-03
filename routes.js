var express = require('express'),
    router = express.Router();

router.get('/info', require('./routes/info.js'));
router.get('/reports', require('./routes/reports.js'));

module.exports = router;
