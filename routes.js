var express = require('express'),
    router = express.Router();

router.get('/info', require('./routes/info.js'));

module.exports = router;
