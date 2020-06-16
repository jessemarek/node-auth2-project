const db = require('../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function add() {

}

function find() {
    return db('users')
}

function findBy(filter) {

}

function findById(id) {

}