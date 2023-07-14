require('dotenv').config()

require('./src/server/server')

const connectToDb = require('./src/database/connect')

connectToDb()