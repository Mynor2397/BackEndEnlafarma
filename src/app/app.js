const express = require('express');

const port = (process.env.PORT || 4002)

const app = express()

app.set('port', port)

app. use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('./routes/branch.route'))




module.exports = app