const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

//Middleware
server.use(helmet())
server.use(express.json())
server.use(cors())

//Routers

//Endpoints
server.get('/', (req, res) => {
    res.status(200).json({ api: "up and running!" })
})

module.exports = server