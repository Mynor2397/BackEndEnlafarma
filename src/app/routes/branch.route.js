const route = require('express').Router()

const { getBranch, getBranchid } = require('../controllers/branch.controller')


route.route('/api/branch').get(getBranch)
route.route('/api/branch/:id').get(getBranchid)

module.exports = route

