// const { Station } = require('../models')

module.exports = {
  async search (req, res) {
    // Search for req.body.location
    // and send back the names of the
    // nearest stations
    res.send({
      stations:
        {
          'Tiel': {
            name: 'Tiel',
            city: 'Tiel',
            province: 'Gelderland',
            distance: '5km'
          },
          'Tiel Passewaaij': {
            name: 'Tiel Passewaaij',
            city: 'Tiel',
            province: 'Gelderland',
            distance: '12km'
          },
          'Woerden': {
            name: 'Woerden',
            city: 'Woerden',
            province: 'Utrecht',
            distance: '28km'
          }
        }
    })
    // res.send(station.toJSON())
  }
}
