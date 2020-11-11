const bcrypt = require('bcryptjs')
const http = require('../helpers/status')

const user = require('../models/user');
const jwt = require('../helpers/jwt-token')

const handAuth = {}

handAuth.Login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(http.StatusNotFound).json({
            ok: false,
            user: {}
        })
    }

    user.findOne({ username: username })
        .then(isUser => {
            if (!isUser) {
                return res.status(http.StatusNotFound).json({
                    ok: false,
                    error: 'Username or Password is invalid'
                })
            }
            bcrypt.compare(password, isUser.password)
                .then(async resultComparation => {
                    if (resultComparation) {

                        const token = await jwt.CreateToken(isUser)

                        res.status(http.StatusOK).json({
                            ok: true,
                            token: token
                        })
                    } else {
                        return res.status(http.StatusNotFound).json({
                            ok: false,
                            error: 'Username or Password is invalid'
                        })
                    }
                })

        })
        .catch(err => console.log(err))
}

module.exports = handAuth