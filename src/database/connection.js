const mongoose = require('mongoose')
const trunks = require('trunks-log')

const log = new trunks('DBCONN')

mongoose.connection.on('connecting', () => {
  log.info(`Connecting to Mongo at mongodb://gerrome:Ifah6354!@mongodb:27017/mevn-app`)
})

mongoose.connection.on('connected', () => {
  log.info('Mongo connection established')
})

mongoose.connection.on('error', (error) => {
  log.error('Mongo connection error', error)
})

function establishDbConnection() {
  try {
    mongoose.connect('mongodb://gerrome:Ifah6354!@mongodb:27017/mevn-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    log.error('Mongo Connection Error:, {}', error)
  }
}

module.exports = { establishDbConnection }
