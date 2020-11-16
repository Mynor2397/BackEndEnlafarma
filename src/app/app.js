const express = require('express')
const { Auth } = require('./middlewares/auth')
const cors = require('cors')

const port = (process.env.PORT || 4002)

const app = express()

app.set('port', port)
app.use(cors())

app. use(express.urlencoded({extended: false}))
app.use(express.json())


app.use('/api', Auth, require('./routes/route'))
app.use(require('./routes/free.route'))

module.exports = app