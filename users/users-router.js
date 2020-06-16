const router = require('express').Router()

const { requiresAuth, checkDept } = require('../auth/requires-auth')

const Users = require('./users-model')

router.use('/', requiresAuth, checkDept, (req, res) => {

    Users.find({ department: req.dept })
        .then(users => {
            if (users.length) {
                res.status(200).json({ users, decodedToken: req.decodedToken })
            }
            else {
                res.status(404).json({ message: "No users found" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router