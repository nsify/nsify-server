const { Station } = require('../models')

module.exports = async (nsApi) => {
  let stations

  try {
    stations = await nsApi.get('stations')
  } catch (e) {
    console.log('Failed to get stations..')
    console.log(e)
  }

  for (let i = 0; i < stations.data.payload.length; i++) {
    let station = {}
    station['name'] = stations.data.payload[i].namen.lang
    station['code'] = stations.data.payload[i].code
    station['country'] = stations.data.payload[i].land
    station['type'] = stations.data.payload[i].stationType

    try {
      await Station.create(station)
    } catch (e) {
      if (e.name !== 'SequelizeUniqueConstraintError') {
        console.log('Failed to insert line..')
        console.log(e)
        process.exit(1)
      }
    }
  }

  console.log('Done syncing stations!')
}
