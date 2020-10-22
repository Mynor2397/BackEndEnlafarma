const route = require('express').Router()

const { getCustom, getCustomid, getCustombr, getCustompr } = require('../controllers/customer.controller')


route.route('/custome').get(getCustom)
route.route('/custome/:id').get(getCustomid)
route.route('/custome/branch/:id').get(getCustombr)
route.route('/custome/sale/:id').get(getCustompr)

module.exports = route
