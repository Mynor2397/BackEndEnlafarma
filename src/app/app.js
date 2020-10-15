const express = require('express');

const app = express()

const port = (process.env.PORT || 4001)

app.set('port', port)

app. use(express.urlencoded({extended: false}))

app.use(express.json);




module.exports = app