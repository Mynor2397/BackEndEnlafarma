const express = require('express')

const port = (process.env.PORT || 4002)

const app = express()

app.set('port', port)

app. use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('./routes/branch.route'))
app.use(require('./routes/vendor.route'))
app.use(require('./routes/customer.route'))




module.exports = app