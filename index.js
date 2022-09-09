const app = require('./src/app.js')

const port = process.env.PORT || 8500

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
