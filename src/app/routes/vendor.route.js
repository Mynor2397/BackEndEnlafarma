const route = require('express').Router()

const { getVendor, getVendorid } = require('../controllers/vendor.controller')


route.route('/').get(getVendor)
route.route('/:id').get(getVendorid)

module.exports = route

