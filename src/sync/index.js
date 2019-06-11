const fs = require('fs')
const path = require('path')
const config = require('../config/config')
const axios = require('axios')

const modules = {}

const nsApi = axios.create({
  baseURL: 'https://ns-api.nl/reisinfo/api/v2/',
  timeout: config.nsapi.timeout,
  headers: {
    'x-api-key': config.nsapi.api_key
  }
})

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    modules[file] = require(path.join(__dirname, file))(nsApi)
  })
