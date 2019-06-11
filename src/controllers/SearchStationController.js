const { Station } = require('../models')
const { like } = require('sequelize').Op

module.exports = {
  async search (req, res) {
    let data = {}
    data['stations'] = {}
    // Search for req.body.location
    // and send back the names of the
    // nearest stations
    let stations = await Station.findAll({
      where: {
        name: {
          [like]: `${req.body.location}%`
        }
        // id: 1
      },
      limit: 10
    })

    // console.log(tmp.dataValues)
    for (let i = 0; i < stations.length; i++) {
      data['stations'][stations[i].dataValues.name] = stations[i].dataValues
    }
    res.send(data)
  }
}
