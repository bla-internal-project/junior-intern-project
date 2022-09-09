const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('TEST')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
