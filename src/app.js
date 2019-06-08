const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/search_station', (req, res) => {
  // Search for req.body.location
  // and send back the names of the
  // nearest stations
  res.send({
    locations: ['Tiel', 'Woerden']
  })
})

app.listen(process.env.PORT || 8081)
