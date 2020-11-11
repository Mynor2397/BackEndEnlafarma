const jwt = require('jwt-simple');
const moment = require('moment');
const { JWT_SECRET } = require('../certificates/jwt-config');

exports.CreateToken = async function(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(8, "hours").unix(),
    };

    return jwt.encode(payload, JWT_SECRET);
}