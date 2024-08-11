const express = require('express')
const app = express()
require('dotenv').config()

// Import MongoDB
const connectMongoDB = require('./Models/db')

port = process.env.PORT || 5000;

// Connect MongoDB
connectMongoDB()

app.get('', (req, res) => {
   res.send("Cash mate server is running ....")
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
})