const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

module.exports = app