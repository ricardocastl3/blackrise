
const express = require('express')
const app = express()
const userRouters = require('../routes/User');

app.use("/users", userRouters)