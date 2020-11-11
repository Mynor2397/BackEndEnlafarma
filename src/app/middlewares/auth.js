const jwt = require('jwt-simple');
const moment = require('moment');

const { JWT_SECRET } = require('../certificates/jwt-config');
const Middleware = {}

Middleware.Auth = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res
                .status(403)
                .json({
                    error: 'Unauthorized'
                })
        }

        var token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({
                    error: 'Unauthorized, token not found in the request'
                })
        }

        var payload = jwt.decode(token, JWT_SECRET)
        req.user = payload.sub;
        
        next();
    } catch (error) {
        if (error.message == 'Token expired') {
            return res
                .status(401)
                .json({
                    error: 'Token was expired'
                })
        }

        if (error.message == 'Signature verification failed') {
            return res
                .status(401)
                .json({
                    error: 'Signature of the token is invalid'
                })
        }
        return res
            .status(401)
            .json({
                error: 'The token is invalid'
            })

    }

}
module.exports = Middleware