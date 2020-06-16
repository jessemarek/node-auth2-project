
module.exports = {
    requiresAuth,
    checkDept
}

function requiresAuth(req, res, next) {
    next()
}

function checkDept(dept) {
    return (req, res, next) => {
        next()
    }
}