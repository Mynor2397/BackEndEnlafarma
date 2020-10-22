const route = require('express').Router()

const { getCustom, getCustomid, getCustombr } = require('../controllers/customer.controller')


route.route('/custome').get(getCustom)
route.route('/custome/:id').get(getCustomid)
route.route('/custome/branch/:id').get(getCustombr)

module.exports = route
    