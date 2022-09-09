const express = require('express')
const app = express()
app.disable('x-powered-by') // To avoid disclose technology used on website
const messages = require('./routes/messages.js')

require('dotenv').config()

// MIDDLEWARE:
app.use(express.json()) // To allow getting the req.body object

// ROUTES:
app.use('/api/v1/messages', messages)

app.get('/', (req, res) => {
  res.send('TEST')
})

module.exports = app
