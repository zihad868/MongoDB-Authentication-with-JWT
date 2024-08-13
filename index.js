const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./Routes/AuthRouter')
require('dotenv').config()

// Import MongoDB
const connectMongoDB = require('./Models/db')
const information = require('./Controllers/InformationControllers')

port = process.env.PORT || 5000;

// Connect MongoDB
connectMongoDB()

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/user', information)

app.get('', (req, res) => {
   res.send(" server is running ....")
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
})