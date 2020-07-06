const router = require('express').Router()
const { isValid, generateToken } = require('../users/users-service')

//HASH library
const bcrypt = require('bcryptjs')
const salt = require('../config/constants').hash_salt

//DB connection
const Users = require('../users/users-model')

router.post('/register', (req, res) => {
    const credentials = req.body

    if (isValid(credentials)) {
        const hash = bcrypt.hashSync(credentials.password, salt)

        credentials.password = hash

        Users.add(credentials)
            .then(user => {
                console.log(user)
                res.status(201).json(user)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: error.message })
            })
    }
    else {
        res.status(400).json({ message: "Please provide username, password and department" })
    }
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    if (isValid(req.body)) {
        Users.findBy({ username })
            .then(([user]) => {
                if (user && bcrypt.compareSync(password, user.password)) {

                    const token = generateToken(user)

                    res.status(200).json({ token, message: `${username} is logged in!` })
                }
                else {
                    res.status(401).json({ messasge: "invalid credentials" })
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message })
            })
    }
    else {
        res.status(400).json({ message: "please provide username and password" })
    }
})

module.exports = router