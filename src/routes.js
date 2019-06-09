const SearchStationController = require('./controllers/SearchStationController')

module.exports = (app) => {
  app.post('/search_station', SearchStationController.search)
}
