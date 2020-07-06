const jwt = require('jsonwebtoken')
const jwtKey = require('../config/constants').jwt_key

module.exports = {
    requiresAuth,
    checkDept
}

function requiresAuth(req, res, next) {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, jwtKey, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: "access denied: invalid token" })
            }
            else {
                req.decodedToken = decodedToken
                next()
            }
        })
    }
    else {
        res.status(401).json({ message: "please provide credentials to access this resource" })
    }
}

function checkDept(req, res, next) {

    const { department } = req.decodedToken

    if (department) {
        req.dept = department
        next()
    }
    else {
        res.status(403).json({ message: "access not authorized" })
    }
}