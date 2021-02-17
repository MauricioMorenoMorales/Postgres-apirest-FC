require('dotenv').config()
const express = require('express')
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/users', require('./routes/index.routes'))

app.listen(4444)
console.log('server on port 4444')
