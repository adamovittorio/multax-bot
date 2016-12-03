var express = require('express'),
    router = express.Router();

router.get('/reports', require('./routes/reports.js'));

module.exports = router;
