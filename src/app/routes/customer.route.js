const route = require('express').Router()

const { getCustom, getCustomid, getCustombr, getCustompr } = require('../controllers/customer.controller')


route.route('/api/custome').get(getCustom)
route.route('/api/custome/:id').get(getCustomid)
route.route('/api/custome/branch/:id').get(getCustombr)
route.route('/api/custome/sale/:id').get(getCustompr)

module.exports = route
