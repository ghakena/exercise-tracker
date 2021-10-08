const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const usersRoutes = require('./routes/users.routes')
const exercisesRoutes = require('./routes/exercises.routes')

// create express app and allow app to use dotenv file.
const app = express()
require('dotenv').config()

// middleware
app.use(express.json())
app.use(cors())

const port = process.env.port || 5000
const uri = process.env.uri

// connect to mongoDB database using mongoose.
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database connection established successfully.')
})

app.use('/users', usersRoutes)
app.use('/exercises', exercisesRoutes)

app.listen(port, () => {
  console.log(`Server running on port: ${ port }`)
})