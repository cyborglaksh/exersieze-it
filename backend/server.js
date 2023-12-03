require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// routes
app.get('/',(req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests 
    app.listen(process.env.PORT, () => {
    console.log('Connected to db & listening on port', process.env.PORT)
})
})
.catch((err) => {
    console.log(err)
})

//middleware

// attaches body content to a req
app.use(express.json())

app.use('/api/workouts', workoutRoutes)