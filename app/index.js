const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const routes = require('./routes')

app.disable('x-powered-by')
app.use(compression())
app.use(bodyParser.json())

if (!isProduction) app.use(cors())

// Routes
app.use(routes)

app.get('/', function (req, res) {
    res.send("Hello from MultaxBot!")
})

module.exports = app
