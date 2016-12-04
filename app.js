var express = require('express');
var routes = require('./routes')

var app = express();

// Routes
app.use(routes);

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.send("Hello from MultaxBot!");
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
