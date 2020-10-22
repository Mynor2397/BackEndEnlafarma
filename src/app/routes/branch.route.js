const route = require('express').Router()

const { getBranch, getBranchid } = require('../controllers/branch.controller')


route.route('/branch').get(getBranch)
route.route('/branch/:id').get(getBranchid)

module.exports = route

