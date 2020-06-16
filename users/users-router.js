const router = require('express').Router()

const { requiresAuth, checkDept } = require('../auth/requires-auth')

router.use('/', requiresAuth, checkDept('dept'), (req, res) => {
    res.status(200).json({ message: " GET / users" })
})

module.exports = router