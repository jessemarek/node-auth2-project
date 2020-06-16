const router = require('express').Router()

const bcrypt = require('bcryptjs')
const salt = require('../config/constants').hash_salt

const Users = require('../users/users-model')
const { isValid } = require('../users/users-service')

router.post('/register', (req, res) => {
    const credentials = req.body

    if (credentials) {
        const hash = bcrypt.hashSync(credentials.password, salt)

        credentials.password = hash

        Users.add(isValid(credentials))
            .then(user => {
                res.status(201).json(user)
            })
            .catch(error => {
                res.status(500).json({ message: error.message })
            })
    }
    else {
        res.status(400).json({ message: "Please provide username, password and department" })
    }
})

router.post('/login', (req, res) => {

})

module.exports = router