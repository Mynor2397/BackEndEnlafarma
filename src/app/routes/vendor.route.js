const route = require('express').Router()

const { getVendor, getVendorid } = require('../controllers/vendor.controller')


route.route('/api').get(getVendor)
route.route('/api/:id').get(getVendorid)

module.exports = route

