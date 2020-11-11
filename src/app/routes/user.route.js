const route = require('express').Router()

const { Login } = require('../controllers/auth.controller')
const { Auth } = require('../middlewares/auth')


route.route('/Login').post(Login)
route.route('/user/profile').post(Auth)

module.exports = route